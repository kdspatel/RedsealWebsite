require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');

  const users = await User.find({});
  let updatedCount = 0;

  for (const user of users) {
    let changed = false;

    // old format: tradeAccess = ["carpentry"], accessExpiresAt = someDate
    if (
      Array.isArray(user.tradeAccess) &&
      user.tradeAccess.length > 0 &&
      typeof user.tradeAccess[0] === 'string'
    ) {
      const expiry = user.accessExpiresAt || new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
      user.tradeAccess = user.tradeAccess.map(trade => ({
        trade,
        expiresAt: expiry,
        purchasedAt: user.updatedAt || new Date()
      }));
      changed = true;
    }

    // ensure hasPaid matches actual active trades
    if (Array.isArray(user.tradeAccess)) {
      const now = new Date();
      user.tradeAccess = user.tradeAccess.filter(t => t && t.trade && t.expiresAt);

      const activeTrades = user.tradeAccess.filter(t => new Date(t.expiresAt) > now);
      user.hasPaid = activeTrades.length > 0;
      changed = true;
    }

    if (changed) {
      await user.save();
      updatedCount++;
      console.log(`Updated user: ${user.email}`);
    }
  }

  console.log(`Migration finished. Updated ${updatedCount} user(s).`);
  await mongoose.disconnect();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});