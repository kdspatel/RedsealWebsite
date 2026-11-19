const User = require('../models/User');

module.exports = async function requirePaid(req, res, next) {
  try {
    if (!req.session.userId) {
      return res.redirect('/login');
    }

    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.redirect('/login');
    }

    if (!user.hasPaid) {
      return res.redirect('/trades');
    }

    if (!user.accessExpiresAt || new Date() > new Date(user.accessExpiresAt)) {
      user.hasPaid = false;
      user.tradeAccess = [];
      await user.save();

      return res.status(403).send(`
        <h2>Your access has expired</h2>
        <p>Your 4-month access period has ended. Please purchase again to continue.</p>
        <a href="/trades">Buy access again</a>
      `);
    }

    next();
  } catch (err) {
    console.error('requirePaid error:', err);
    res.status(500).send('Access check failed');
  }
};