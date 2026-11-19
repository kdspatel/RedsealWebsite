const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const User = require('../models/User');
const Payment = require('../models/Payment');

const {
  cleanupExpiredUnverifiedUsers,
  deletionDeadlineFromSignup
} = require('../services/unverifiedUserCleanup');

const { verifyRecaptcha } = require('../middleware/recaptcha');

const {
  sendVerificationEmail,
  sendPasswordResetEmail
} = require('../config/email');

const router = express.Router();

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];

  if (forwarded) {
    return String(forwarded).split(',')[0].trim();
  }

  return req.socket?.remoteAddress || req.ip || 'unknown';
}

function normalizeDeviceId(value) {
  const deviceId = String(value || '').trim();

  return /^[A-Za-z0-9._:-]{8,160}$/.test(deviceId)
    ? deviceId
    : null;
}

function signupLimit() {
  const configured = Number(
    process.env.MAX_ACCOUNTS_PER_IP_DEVICE || 3
  );

  return Number.isInteger(configured) && configured > 0
    ? configured
    : 3;
}

function signupLimitPage() {
  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1"
  >
  <title>Account limit reached | Red Seal Practice</title>

  <link
    rel="stylesheet"
    href="/css/extracted/inline-utilities.css?release=20260724-mobile-fix"
  >
<link rel=stylesheet href=/css/rs-theme.css?release=20261117-redesign></head>

<body class="status-page-body">
  <main class="status-page-card">
    <h1>Account limit reached</h1>

    <p>
      A maximum of ${signupLimit()} learner accounts may be
      created from the same network or browser device.
    </p>

    <p>
      Use an existing verified account or contact support if
      this is a shared training location.
    </p>

    <a class="status-page-button" href="/login">
      Go to Login
    </a>
  </main>
</body>
</html>
  `;
}

function getAdminEmails() {
  const configured =
    process.env.ADMIN_EMAILS ||
    process.env.ADMIN_EMAIL ||
    'support@redsealpractice.ca';

  return String(configured)
    .split(',')
    .map(value => value.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Returns the public website URL used in verification and
 * password-reset emails.
 *
 * In production, BASE_URL should be:
 * https://www.redsealpractice.ca
 *
 * If BASE_URL is missing locally, it falls back to the
 * current request host, such as http://localhost:3000.
 */
function getBaseUrl(req) {
  const configuredBaseUrl = String(
    process.env.BASE_URL || ''
  ).trim();

  if (configuredBaseUrl) {
    return configuredBaseUrl.replace(/\/+$/, '');
  }

  const forwardedProto = req.headers['x-forwarded-proto'];

  const protocol = forwardedProto
    ? String(forwardedProto).split(',')[0].trim()
    : req.protocol;

  const host = req.get('host');

  return `${protocol}://${host}`.replace(/\/+$/, '');
}

/* -------------------------------------------------------
   PAGE ROUTES
------------------------------------------------------- */

// Signup page
router.get('/signup', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../views/signup.html')
  );
});

// Login page
router.get('/login', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../views/login.html')
  );
});

// Check email page
router.get('/check-email', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../views/check-email.html')
  );
});

// Forgot password page
router.get('/forgot-password', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../views/forgot-password.html')
  );
});

// Resend verification page
router.get('/resend-verification', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      '../../views/resend-verification.html'
    )
  );
});

// Reset password page
router.get('/reset-password', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../views/reset-password.html')
  );
});

// Generic auth message page
router.get('/auth-message', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../views/auth-message.html')
  );
});

/* -------------------------------------------------------
   VERIFY EMAIL
------------------------------------------------------- */

router.get('/verify-email', async (req, res) => {
  try {
    const token = String(req.query.token || '').trim();

    if (!token) {
      return res
        .status(400)
        .send('Invalid verification link.');
    }

    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: {
        $gt: new Date()
      }
    });

    if (!user) {
      return res
        .status(400)
        .send(
          'Verification link is invalid or expired.'
        );
    }

    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpires = null;
    user.unverifiedDeleteAt = null;

    await user.save();

    return res.sendFile(
      path.join(__dirname, '../../views/verified.html')
    );
  } catch (err) {
    console.error('Email verification error:', err);

    return res
      .status(500)
      .send('Email verification failed.');
  }
});

/* -------------------------------------------------------
   SIGNUP
------------------------------------------------------- */

router.post(
  '/signup',
  verifyRecaptcha({
    redirectPath: '/signup'
  }),
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        province,
        marketingConsent,
        signupDeviceId
      } = req.body;

      await cleanupExpiredUnverifiedUsers();

      const signupIp = getClientIp(req);
      const normalizedDeviceId =
        normalizeDeviceId(signupDeviceId);

      const maxAccounts = signupLimit();

      const [
        ipAccountCount,
        deviceAccountCount
      ] = await Promise.all([
        User.countDocuments({
          $or: [
            { signupIp },
            { lastLoginIp: signupIp }
          ]
        }),

        normalizedDeviceId
          ? User.countDocuments({
              signupDeviceId: normalizedDeviceId
            })
          : Promise.resolve(0)
      ]);

      if (
        ipAccountCount >= maxAccounts ||
        (
          normalizedDeviceId &&
          deviceAccountCount >= maxAccounts
        )
      ) {
        return res
          .status(429)
          .send(signupLimitPage());
      }

      const normalizedEmail = String(email || '')
        .trim()
        .toLowerCase();

      const existing = await User.findOne({
        email: normalizedEmail
      });

      if (existing) {
        return res.status(400).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>
    User Already Exists | Red Seal Practice
  </title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background:
        radial-gradient(
          circle at top left,
          #dbeafe 0%,
          transparent 28%
        ),
        linear-gradient(
          to bottom,
          #eef4ff 0%,
          #f4f7fb 240px
        );
      color: #0f172a;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .auth-card {
      width: 100%;
      max-width: 520px;
      background: #ffffff;
      border: 1px solid #dbe3ee;
      border-radius: 26px;
      padding: 36px;
      text-align: center;
      box-shadow:
        0 16px 38px rgba(15, 23, 42, 0.12);
    }

    .auth-icon {
      width: 68px;
      height: 68px;
      border-radius: 999px;
      background: #fee2e2;
      color: #b91c1c;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 18px;
      font-size: 34px;
      font-weight: bold;
    }

    h1 {
      margin: 0 0 10px;
      font-size: 30px;
      line-height: 1.2;
      color: #0f172a;
    }

    p {
      margin: 0 0 24px;
      color: #64748b;
      line-height: 1.7;
      font-size: 15px;
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      border-radius: 999px;
      padding: 12px 22px;
      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
      transition: 0.2s ease;
    }

    .btn-primary {
      background: #0f172a;
      color: white;
    }

    .btn-primary:hover {
      background: #1e293b;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: #eff6ff;
      color: #1e3a8a;
      border: 1px solid #bfdbfe;
    }

    .btn-secondary:hover {
      background: #dbeafe;
      transform: translateY(-1px);
    }
  </style>
<link rel=stylesheet href=/css/rs-theme.css?release=20261117-redesign></head>

<body>
  <div class="auth-card">
    <div class="auth-icon">!</div>

    <h1>User already exists</h1>

    <p>
      This email is already registered. Please log in
      or go back and use another email.
    </p>

    <div class="actions">
      <a
        class="btn btn-primary"
        href="/login"
      >
        Log In
      </a>

      <a
        class="btn btn-secondary"
        href="/signup"
      >
        Go Back
      </a>
    </div>
  </div>
</body>
</html>
        `);
      }

      const passwordHash = await bcrypt.hash(
        String(password || ''),
        12
      );

      const verificationToken = crypto
        .randomBytes(32)
        .toString('hex');

      const unverifiedDeleteAt =
        deletionDeadlineFromSignup(new Date());

      const verificationTokenExpires =
        unverifiedDeleteAt;

      const user = await User.create({
        name: String(name || '').trim(),
        email: normalizedEmail,
        passwordHash,
        isVerified: false,
        verificationToken,
        verificationTokenExpires,
        unverifiedDeleteAt,
        signupIp,
        signupDeviceId: normalizedDeviceId,
        hasPaid: false,
        province: String(
          province || 'British Columbia'
        ).trim(),
        marketingConsent:
          marketingConsent === '1',
        marketingConsentAt:
          marketingConsent === '1'
            ? new Date()
            : null,
        tradeAccess: []
      });

      const verificationUrl =
        `${getBaseUrl(req)}/verify-email?token=` +
        encodeURIComponent(verificationToken);

      try {
        await sendVerificationEmail(
          user.email,
          verificationUrl,
          user.name
        );
      } catch (emailErr) {
        console.error(
          'Verification email send failed:',
          emailErr
        );
      }

      return res.redirect('/check-email');
    } catch (err) {
      console.error('Signup error:', err);

      return res
        .status(500)
        .send('Signup failed');
    }
  }
);

/* -------------------------------------------------------
   LOGIN
------------------------------------------------------- */

router.post(
  '/login',
  verifyRecaptcha({
    redirectPath: '/login'
  }),
  async (req, res) => {
    const loginUrl = '/login';

    try {
      const {
        email,
        password,
        remember,
        next
      } = req.body;

      const normalizedEmail = String(email || '')
        .trim()
        .toLowerCase();

      await cleanupExpiredUnverifiedUsers();

      const user = await User.findOne({
        email: normalizedEmail
      });

      if (!user) {
        return res.redirect(
          `${loginUrl}?error=invalid`
        );
      }

      const ok = await bcrypt.compare(
        String(password || ''),
        user.passwordHash
      );

      if (!ok) {
        return res.redirect(
          `${loginUrl}?error=invalid`
        );
      }

      if (!user.isVerified) {
        return res.redirect(
          `${loginUrl}?error=verify`
        );
      }

      const sessionToken = crypto
        .randomBytes(32)
        .toString('hex');

      req.session.userId = user._id.toString();
      req.session.sessionToken = sessionToken;

      /*
       * Keep the session for 30 days only when the
       * user explicitly selects Remember me.
       */
      if (remember === '1') {
        req.session.cookie.maxAge =
          1000 * 60 * 60 * 24 * 30;
      } else {
        req.session.cookie.expires = false;
        req.session.cookie.maxAge = null;
      }

      user.currentSessionToken = sessionToken;
      user.lastLoginAt = new Date();
      user.lastLoginIp = getClientIp(req);
      user.lastLoginUserAgent =
        req.headers['user-agent'] || 'unknown';

      await user.save();

      const safeNext =
        typeof next === 'string' &&
        next.startsWith('/') &&
        !next.startsWith('//')
          ? next
          : null;

      if (safeNext) {
        const joiner = safeNext.includes('?')
          ? '&'
          : '?';

        return res.redirect(
          `${safeNext}${joiner}signedin=true`
        );
      }

      const now = new Date();

      const activeTrades =
        Array.isArray(user.tradeAccess)
          ? user.tradeAccess.filter(
              trade =>
                trade.expiresAt &&
                new Date(trade.expiresAt) > now
            )
          : [];

      if (activeTrades.length === 1) {
        return res.redirect(
          `/quiz/${activeTrades[0].trade}` +
          '?signedin=true'
        );
      }

      return res.redirect(
        '/account?signedin=true'
      );
    } catch (err) {
      console.error('Login error:', err);

      return res.redirect(
        `${loginUrl}?error=server`
      );
    }
  }
);

/* -------------------------------------------------------
   FORGOT PASSWORD
------------------------------------------------------- */

router.post(
  '/forgot-password',
  verifyRecaptcha({
    redirectPath: '/forgot-password'
  }),
  async (req, res) => {
    try {
      const normalizedEmail = String(
        req.body.email || ''
      )
        .trim()
        .toLowerCase();

      const user = await User.findOne({
        email: normalizedEmail
      });

      if (!user) {
        return res.redirect(
          '/auth-message?type=reset-no-account'
        );
      }

      const resetToken = crypto
        .randomBytes(32)
        .toString('hex');

      const resetTokenExpires = new Date(
        Date.now() + 1000 * 60 * 60
      );

      /*
       * IMPORTANT:
       * These names must match the User schema.
       */
      user.resetPasswordToken = resetToken;
      user.resetPasswordTokenExpires =
        resetTokenExpires;

      await user.save();

      const resetUrl =
        `${getBaseUrl(req)}/reset-password?token=` +
        encodeURIComponent(resetToken);

      try {
        await sendPasswordResetEmail(
          user.email,
          resetUrl,
          user.name
        );

        console.log(
          'Reset email sent to:',
          user.email
        );
      } catch (emailErr) {
        console.error(
          'Password reset email send failed:',
          emailErr
        );

        /*
         * Remove the unusable token when sending the
         * email fails.
         */
        user.resetPasswordToken = null;
        user.resetPasswordTokenExpires = null;

        await user.save().catch(saveErr => {
          console.error(
            'Could not clear failed reset token:',
            saveErr
          );
        });

        return res.redirect(
          '/auth-message?type=reset-failed'
        );
      }

      return res.redirect(
        '/auth-message?type=reset-sent'
      );
    } catch (err) {
      console.error(
        'Forgot password error:',
        err
      );

      return res.redirect(
        '/auth-message?type=reset-failed'
      );
    }
  }
);

/* -------------------------------------------------------
   RESET PASSWORD
------------------------------------------------------- */

router.post(
  '/reset-password',
  async (req, res) => {
    try {
      const token = String(
        req.body.token || ''
      ).trim();

      const password = String(
        req.body.password || ''
      );

      if (!token || !password) {
        return res
          .status(400)
          .send('Missing token or password.');
      }

      /*
       * IMPORTANT:
       * These field names must match the User schema.
       */
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordTokenExpires: {
          $gt: new Date()
        }
      });

      if (!user) {
        return res.redirect(
          '/auth-message?type=reset-invalid'
        );
      }

      const passwordHash = await bcrypt.hash(
        password,
        12
      );

      user.passwordHash = passwordHash;

      /*
       * Clear the token so it cannot be used again.
       */
      user.resetPasswordToken = null;
      user.resetPasswordTokenExpires = null;

      /*
       * End any previously active user session.
       */
      user.currentSessionToken = null;

      await user.save();

      /*
       * Destroy an existing browser session, if any,
       * after the password changes.
       */
      if (req.session) {
        return req.session.destroy(
          sessionError => {
            if (sessionError) {
              console.error(
                'Session cleanup after password reset failed:',
                sessionError
              );
            }

            return res.redirect(
              '/auth-message?type=reset-success'
            );
          }
        );
      }

      return res.redirect(
        '/auth-message?type=reset-success'
      );
    } catch (err) {
      console.error(
        'Reset password error:',
        err
      );

      return res.redirect(
        '/auth-message?type=reset-failed'
      );
    }
  }
);

/* -------------------------------------------------------
   RESEND VERIFICATION
------------------------------------------------------- */

router.post(
  '/resend-verification',
  verifyRecaptcha({
    redirectPath: '/resend-verification'
  }),
  async (req, res) => {
    try {
      const normalizedEmail = String(
        req.body.email || ''
      )
        .trim()
        .toLowerCase();

      const user = await User.findOne({
        email: normalizedEmail
      });

      /*
       * Do not expose whether an account exists.
       */
      if (!user) {
        return res.redirect(
          '/auth-message?type=verify-sent'
        );
      }

      if (user.isVerified) {
        return res.redirect(
          '/auth-message?type=already-verified'
        );
      }

      const verificationToken = crypto
        .randomBytes(32)
        .toString('hex');

      const accountDeadline =
        user.unverifiedDeleteAt ||
        deletionDeadlineFromSignup(
          user.createdAt
        );

      if (accountDeadline <= new Date()) {
        await User.deleteOne({
          _id: user._id,
          isVerified: false
        });

        return res.redirect(
          '/auth-message?type=verify-failed'
        );
      }

      user.unverifiedDeleteAt =
        accountDeadline;

      user.verificationToken =
        verificationToken;

      user.verificationTokenExpires =
        accountDeadline;

      await user.save();

      const verificationUrl =
        `${getBaseUrl(req)}/verify-email?token=` +
        encodeURIComponent(verificationToken);

      try {
        await sendVerificationEmail(
          user.email,
          verificationUrl,
          user.name
        );

        console.log(
          'Verification email resent to:',
          user.email
        );
      } catch (emailErr) {
        console.error(
          'Resend verification email failed:',
          emailErr
        );

        return res.redirect(
          '/auth-message?type=verify-failed'
        );
      }

      return res.redirect(
        '/auth-message?type=verify-sent'
      );
    } catch (err) {
      console.error(
        'Resend verification error:',
        err
      );

      return res.redirect(
        '/auth-message?type=verify-failed'
      );
    }
  }
);

/* -------------------------------------------------------
   DELETE ACCOUNT
------------------------------------------------------- */

router.post(
  '/delete-account',
  async (req, res) => {
    try {
      if (!req.session.userId) {
        return res.status(401).json({
          success: false,
          message: 'Not logged in.'
        });
      }

      const password = String(
        req.body.password || ''
      );

      if (!password.trim()) {
        return res.status(400).json({
          success: false,
          message: 'Password is required.'
        });
      }

      const user = await User.findById(
        req.session.userId
      );

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found.'
        });
      }

      const passwordMatch = await bcrypt.compare(
        password,
        user.passwordHash
      );

      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: 'Incorrect password.'
        });
      }

      await Payment.deleteMany({
        userId: user._id
      });

      await User.findByIdAndDelete(
        user._id
      );

      req.session.destroy(() => {
        return res.json({
          success: true,
          message:
            'Account deleted successfully.'
        });
      });
    } catch (err) {
      console.error(
        'Delete account error:',
        err
      );

      return res.status(500).json({
        success: false,
        message:
          'Failed to delete account.'
      });
    }
  }
);

/* -------------------------------------------------------
   LOGOUT
------------------------------------------------------- */

router.get('/logout', async (req, res) => {
  try {
    if (req.session?.userId) {
      const user = await User.findById(
        req.session.userId
      );

      if (
        user &&
        req.session.sessionToken &&
        user.currentSessionToken ===
          req.session.sessionToken
      ) {
        user.currentSessionToken = null;
        await user.save();
      }
    }
  } catch (err) {
    console.error(
      'Logout cleanup error:',
      err
    );
  }

  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
