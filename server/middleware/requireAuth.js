const User = require('../models/User');

function statusPage(title, message, buttonHref, buttonLabel) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} | Red Seal Practice</title>
  <link rel="stylesheet" href="/css/extracted/inline-utilities.css?release=20260724-mobile-fix" />
<link rel=stylesheet href=/css/rs-theme.css?release=20261117-redesign></head>
<body class="status-page-body">
  <main class="status-page-card">
    <h1>${title}</h1>
    ${message}
    <a class="status-page-button" href="${buttonHref}">${buttonLabel}</a>
  </main>
</body>
</html>`;
}

module.exports = async function requireAuth(req, res, next) {
  try {
    if (!req.session.userId) {
      const nextUrl = encodeURIComponent(req.originalUrl || '/account');
      return res.redirect(`/login?next=${nextUrl}&reason=account-required`);
    }

    const user = await User.findById(req.session.userId);
    if (!user) {
      const nextUrl = encodeURIComponent(req.originalUrl || '/account');
      return res.redirect(`/login?next=${nextUrl}&reason=account-required`);
    }

    if (!user.isVerified) {
      req.session.destroy(() => {});
      return res.status(403).send(
        statusPage(
          'Verify your account',
          '<p>Your email address must be verified before you can access your account or protected study content.</p>',
          '/resend-verification',
          'Resend Verification Email'
        )
      );
    }

    if (
      !req.session.sessionToken ||
      !user.currentSessionToken ||
      req.session.sessionToken !== user.currentSessionToken
    ) {
      req.session.destroy(() => {});
      return res.status(401).send(
        statusPage(
          'Session ended',
          '<p>Your account was signed in on another device or browser.</p><p>Please log in again.</p>',
          '/login',
          'Go to Login'
        )
      );
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('requireAuth error:', err);
    res.status(500).send('Authentication failed');
  }
};
