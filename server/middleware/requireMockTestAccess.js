const User = require('../models/User');

module.exports = async function requireMockTestAccess(req, res, next) {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect('/login');

    const trade = String(req.params.trade || req.query.trade || '').trim().toLowerCase();
    const now = new Date();
    const entry = (user.mockTestAccess || []).find(item =>
      item.trade === trade &&
      Number(item.testNumber || 1) === 1 &&
      (!item.expiresAt || new Date(item.expiresAt) >= now)
    );

    if (!entry) {
      return res.redirect(`/mock-test/pricing?trade=${encodeURIComponent(trade)}`);
    }

    req.mockTestAccess = entry;
    req.mockTestUser = user;
    next();
  } catch (err) {
    console.error('Mock test access check failed:', err);
    res.status(500).send('Could not verify mock-test access.');
  }
};
