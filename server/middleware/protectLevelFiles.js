const path = require('path');
const User = require('../models/User');
const { HTML_LEVEL_MAP, LEVEL_ASSET_MAP } = require('../data/levelAccessMap');

function hasActiveTrade(user, trade) {
  const now = new Date();
  return (user.tradeAccess || []).some(entry =>
    entry.trade === trade && entry.expiresAt && new Date(entry.expiresAt) >= now
  );
}

function hasSingleAccess(user, trade, level, setNumber) {
  if (Number(setNumber) !== 1) return false;
  const now = new Date();
  return (user.singleLevelExamAccess || []).some(entry =>
    entry.trade === trade && Number(entry.level) === Number(level) &&
    Number(entry.quizNumber || 1) === 1 &&
    (!entry.expiresAt || new Date(entry.expiresAt) >= now)
  );
}

async function getUser(req) {
  if (!req.session?.userId) return null;
  return User.findById(req.session.userId);
}

async function protectLevelHtml(req, res, next) {
  try {
    const relative = decodeURIComponent(req.path).replace(/^\/+/, '');
    const info = HTML_LEVEL_MAP[relative];
    if (!info) return next();
    const user = await getUser(req);
    if (!user) return res.redirect('/login');
    if (hasActiveTrade(user, info.trade)) return next();
    if (hasSingleAccess(user, info.trade, info.level, info.set)) {
      return res.redirect(`/level-test/${info.trade}/level-${info.level}`);
    }
    return res.status(403).send('This quiz is not included in your access. Purchase the exact Level Quiz 1 or full trade access.');
  } catch (err) {
    console.error('Level HTML protection failed:', err);
    return res.status(500).send('Could not verify level access.');
  }
}

async function protectLevelAsset(req, res, next) {
  try {
    const info = LEVEL_ASSET_MAP[path.basename(req.params.file || '')];
    if (!info) return next();
    const user = await getUser(req);
    if (!user) return res.status(401).send('Login required.');
    if (hasActiveTrade(user, info.trade) || hasSingleAccess(user, info.trade, info.level, info.set)) return next();
    return res.status(403).send('This question set is not included in your access.');
  } catch (err) {
    console.error('Level asset protection failed:', err);
    return res.status(500).send('Could not verify level access.');
  }
}

module.exports = { protectLevelHtml, protectLevelAsset };
