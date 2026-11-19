const User = require('../models/User');
const { getSingleLevelExam } = require('../data/singleLevelExams');

module.exports = async function requireSingleLevelAccess(req, res, next) {
  try {
    const trade = String(req.params.trade || '').trim().toLowerCase();
    const level = Number(req.params.level);
    const exam = getSingleLevelExam(trade, level);
    if (!exam) return res.status(404).send('Level exam not found.');

    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect('/login');

    const now = new Date();
    const entry = (user.singleLevelExamAccess || []).find(item =>
      item.trade === trade &&
      Number(item.level) === level &&
      (!item.expiresAt || new Date(item.expiresAt) >= now)
    );

    if (!entry) {
      return res.redirect(`/level-test/pricing?trade=${encodeURIComponent(trade)}&level=${level}`);
    }

    req.singleLevelExam = exam;
    req.singleLevelAccess = entry;
    req.singleLevelUser = user;
    next();
  } catch (err) {
    console.error('Single level access check failed:', err);
    return res.status(500).send('Could not verify level exam access.');
  }
};
