const User = require('../models/User');

const TRADE_ALIASES = {
  electrician: 'construction-electrician',
  'sheet-metal-worker': 'architectural-sheet-metal-worker',
  'heavy-duty-mechanic': 'heavy-duty-equipment-technician',
  'industrial-mechanic': 'industrial-mechanic-millwright'
};

function normalizeTrade(trade) {
  if (!trade) return '';
  const cleaned = String(trade).trim().toLowerCase();
  return TRADE_ALIASES[cleaned] || cleaned;
}

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

module.exports = function requireTradeAccess(tradeName) {
  return async function (req, res, next) {
    try {
      if (!req.session.userId) {
        return res.redirect('/login');
      }

      const user = await User.findById(req.session.userId);
      if (!user) {
        return res.redirect('/login');
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
            '<p>Your account was signed in on another device or browser.</p>',
            '/login',
            'Go to Login'
          )
        );
      }

      const normalizedTradeName = normalizeTrade(tradeName);

      const tradeEntry = Array.isArray(user.tradeAccess)
        ? user.tradeAccess.find(t => normalizeTrade(t.trade) === normalizedTradeName)
        : null;

      if (!tradeEntry) {
        return res.status(403).send(
          statusPage(
            'Access denied',
            `<p>You do not have access to the <strong>${normalizedTradeName}</strong> quiz.</p><p>Please purchase this trade first.</p>`,
            '/trades',
            'Go to Trades'
          )
        );
      }

      if (!tradeEntry.expiresAt || new Date() > new Date(tradeEntry.expiresAt)) {
        user.tradeAccess = user.tradeAccess.filter(
          t => normalizeTrade(t.trade) !== normalizedTradeName
        );

        user.hasPaid = user.tradeAccess.length > 0;
        await user.save();

        return res.status(403).send(
          statusPage(
            'Your access has expired',
            `<p>Your access for <strong>${normalizedTradeName}</strong> has expired.</p>`,
            `/?trade=${normalizedTradeName}`,
            'Buy this trade again'
          )
        );
      }

      req.user = user;
      next();
    } catch (err) {
      console.error('requireTradeAccess error:', err);
      res.status(500).send('Trade access check failed');
    }
  };
};
