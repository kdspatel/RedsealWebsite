const { Resend } = require('resend');

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function requireEmailClient() {
  if (!resend) {
    const error = new Error('Email service is not configured. Set RESEND_API_KEY in .env.');
    error.code = 'EMAIL_NOT_CONFIGURED';
    throw error;
  }
  return resend;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function emailShell({ title, preheader, body }) {
  return `
    <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="display:none;font-size:1px;color:#f4f7fb;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
        ${preheader || ''}
      </div>

      <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
        <div style="background:#0f172a;color:white;border-radius:22px 22px 0 0;padding:26px 28px;">
          <div style="font-size:22px;font-weight:800;">Red Seal Practice</div>
          <div style="margin-top:8px;font-size:13px;color:#cbd5f5;">
            Trade Level Exam & Red Seal Preparation
          </div>
        </div>

        <div style="background:white;border:1px solid #dbe3ee;border-top:0;padding:30px 28px;border-radius:0 0 22px 22px;">
          <h1 style="margin:0 0 14px;font-size:28px;line-height:1.25;color:#0f172a;">
            ${title}
          </h1>

          ${body}

          <div style="border-top:1px solid #e2e8f0;margin-top:30px;padding-top:18px;color:#64748b;font-size:13px;line-height:1.7;">
            <strong style="color:#0f172a;">Need help?</strong><br/>
            Contact us at
            <a href="mailto:support@redsealpractice.ca" style="color:#2563eb;font-weight:bold;">
              support@redsealpractice.ca
            </a><br/>
            Responses usually within 2–3 business days.
          </div>
        </div>

        <div style="text-align:center;color:#64748b;font-size:12px;line-height:1.6;margin-top:18px;">
          © 2026 Red Seal Practice. All rights reserved.<br/>
          Helping apprentices practice smarter and prepare with confidence.
        </div>
      </div>
    </div>
  `;
}

function button(url, text, color = '#2563eb') {
  return `
    <p style="margin:26px 0;">
      <a href="${url}" style="background:${color};color:#ffffff;padding:13px 20px;text-decoration:none;border-radius:999px;display:inline-block;font-weight:bold;font-size:15px;">
        ${text}
      </a>
    </p>
  `;
}

async function sendVerificationEmail(to, verificationUrl, name = 'User') {
  try {
    const safeName = escapeHtml(name);

    const result = await requireEmailClient().emails.send({
      from: process.env.EMAIL_FROM,
      to,
      subject: 'Verify your Red Seal Practice account',
      html: emailShell({
        title: 'Verify your email address',
        preheader: 'Confirm your email to activate your Red Seal Practice account.',
        body: `
          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            Hello ${safeName},
          </p>

          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            Welcome to Red Seal Practice. Please verify your email to activate your account.
          </p>

          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            We are here to support your full apprenticeship and Red Seal journey—from understanding exam eligibility and next steps to preparing with quizzes, mock tests, and study resources.
          </p>

          ${button(verificationUrl, 'Verify Email')}

          <p style="margin:0 0 12px;color:#64748b;font-size:13px;line-height:1.7;">
            This verification link is valid for 24 hours.
          </p>

          <p style="margin:0;color:#64748b;font-size:13px;line-height:1.7;">
            If the button does not work, copy and paste this link into your browser:
          </p>

          <p style="word-break:break-all;color:#2563eb;font-size:13px;line-height:1.7;">
            ${verificationUrl}
          </p>
        `
      })
    });

    console.log('Verification email sent:', result);
    return result;
  } catch (err) {
    console.error('Verification email send failed FULL:', err);
    throw err;
  }
}

async function sendPasswordResetEmail(to, resetUrl, name = 'User') {
  try {
    const safeName = escapeHtml(name);

    const result = await requireEmailClient().emails.send({
      from: process.env.EMAIL_FROM,
      to,
      subject: 'Reset your Red Seal Practice password',
      html: emailShell({
        title: 'Reset your password',
        preheader: 'Use this secure link to reset your Red Seal Practice password.',
        body: `
          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            Hello ${safeName},
          </p>

          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            We received a request to reset the password for your Red Seal Practice account. Click the button below to choose a new password.
          </p>

          ${button(resetUrl, 'Reset Password', '#dc2626')}

          <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:14px 16px;margin:20px 0;color:#9a3412;font-size:14px;line-height:1.7;">
            This reset link will expire in 1 hour. If you did not request this, you can safely ignore this email.
          </div>

          <p style="margin:0;color:#64748b;font-size:13px;line-height:1.7;">
            If the button does not work, copy and paste this link into your browser:
          </p>

          <p style="word-break:break-all;color:#2563eb;font-size:13px;line-height:1.7;">
            ${resetUrl}
          </p>
        `
      })
    });

    console.log('Password reset email sent:', result);
    return result;
  } catch (err) {
    console.error('Password reset email send failed FULL:', err);
    throw err;
  }
}

async function sendPurchaseEmail({
  to,
  name = 'User',
  tradeTitle,
  amountText,
  expiryDate,
  quizUrl
}) {
  try {
    const safeName = escapeHtml(name);
    const safeTradeTitle = escapeHtml(tradeTitle || 'Selected Trade');
    const safeAmountText = escapeHtml(amountText || '');
    const safeExpiryDate = escapeHtml(expiryDate || '');

    const result = await requireEmailClient().emails.send({
      from: process.env.EMAIL_FROM,
      to,
      subject: `Purchase confirmed - ${safeTradeTitle}`,
      html: emailShell({
        title: 'Your purchase is confirmed',
        preheader: `Your ${safeTradeTitle} access is now active.`,
        body: `
          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            Hello ${safeName},
          </p>

          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            Thank you for your purchase. Your premium trade access is now active, and you can start practicing right away.
          </p>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:18px;margin:22px 0;">
            <p style="margin:0 0 10px;color:#334155;font-size:15px;">
              <strong style="color:#0f172a;">Trade:</strong> ${safeTradeTitle}
            </p>
            <p style="margin:0 0 10px;color:#334155;font-size:15px;">
              <strong style="color:#0f172a;">Amount Paid:</strong> ${safeAmountText}
            </p>
            <p style="margin:0;color:#334155;font-size:15px;">
              <strong style="color:#0f172a;">Access Valid Until:</strong> ${safeExpiryDate}
            </p>
          </div>

          ${button(quizUrl, 'Open My Quiz')}

          <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.8;">
            Your access includes focused practice tools to help you prepare for level exams, Red Seal-style questions, and important trade sections.
          </p>

          <div style="margin:20px 0;padding:18px;border-radius:16px;background:#eef4ff;border:1px solid #cddcff;">
            <p style="margin:0 0 10px;color:#0f172a;font-size:16px;line-height:1.7;font-weight:800;">We are here for your full exam journey.</p>
            <p style="margin:0;color:#334155;font-size:15px;line-height:1.8;">
              If you are unsure where to begin, how to apply, which level or final exam you need, where to get training, or what official authority to contact, message our support team. We will help you understand the next steps and organize your preparation. Final exam eligibility and approval are always decided by the official provincial or territorial authority.
            </p>
          </div>

          ${button('https://www.redsealpractice.ca/exam-journey-support', 'Get Journey Support')}

          <p style="margin:0;color:#64748b;font-size:13px;line-height:1.7;">
            If the button does not work, copy and paste this link into your browser:
          </p>

          <p style="word-break:break-all;color:#2563eb;font-size:13px;line-height:1.7;">
            ${quizUrl}
          </p>
        `
      })
    });

    console.log('Purchase email sent:', result);
    return result;
  } catch (err) {
    console.error('Purchase email send failed FULL:', err);
    throw err;
  }
}

async function sendAdminNotificationEmail(subject, messageHtml, options = {}) {
  try {
    const adminRecipients = String(process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || 'support@redsealpractice.ca')
      .split(',')
      .map(email => email.trim())
      .filter(Boolean);

    const result = await requireEmailClient().emails.send({
      from: process.env.EMAIL_FROM || 'Red Seal Practice <support@redsealpractice.ca>',
      to: adminRecipients,
      subject,
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
      ...(Array.isArray(options.attachments) && options.attachments.length ? { attachments: options.attachments } : {}),
      html: emailShell({
        title: escapeHtml(subject),
        preheader: 'New Red Seal Practice admin notification.',
        body: `
          <div style="color:#334155;font-size:15px;line-height:1.8;">
            ${messageHtml}
          </div>
        `
      })
    });

    console.log('Admin notification email sent:', result);
    return result;
  } catch (err) {
    console.error('Admin notification email failed FULL:', err);
    throw err;
  }
}

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendPurchaseEmail,
  sendAdminNotificationEmail
};