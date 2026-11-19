const User = require('../models/User');

const UNVERIFIED_ACCOUNT_LIFETIME_MS = 24 * 60 * 60 * 1000;

function deletionDeadlineFromSignup(signupDate) {
  const created = signupDate instanceof Date ? signupDate : new Date(signupDate || Date.now());
  return new Date(created.getTime() + UNVERIFIED_ACCOUNT_LIFETIME_MS);
}

async function backfillUnverifiedDeletionDeadlines() {
  const users = await User.find({
    isVerified: false,
    $or: [
      { unverifiedDeleteAt: null },
      { unverifiedDeleteAt: { $exists: false } }
    ]
  }).select('_id createdAt').lean();

  if (!users.length) return 0;

  const operations = users.map(user => ({
    updateOne: {
      filter: { _id: user._id, isVerified: false },
      update: {
        $set: {
          unverifiedDeleteAt: deletionDeadlineFromSignup(user.createdAt)
        }
      }
    }
  }));

  const result = await User.bulkWrite(operations, { ordered: false });
  return result.modifiedCount || 0;
}

async function cleanupExpiredUnverifiedUsers() {
  await backfillUnverifiedDeletionDeadlines();

  const result = await User.deleteMany({
    isVerified: false,
    unverifiedDeleteAt: { $lte: new Date() }
  });

  if (result.deletedCount) {
    console.log(`Removed ${result.deletedCount} unverified account(s) older than 24 hours.`);
  }

  return result.deletedCount || 0;
}

async function ensureUnverifiedCleanupIndex() {
  const desiredName = 'delete_unverified_accounts_after_24_hours';
  const indexes = await User.collection.indexes();

  for (const index of indexes) {
    const usesCleanupField = index.key
      && Object.keys(index.key).length === 1
      && index.key.unverifiedDeleteAt === 1;
    const usesDesiredName = index.name === desiredName;

    if (!usesCleanupField && !usesDesiredName) continue;

    const partial = index.partialFilterExpression || {};
    const isDesired = usesCleanupField
      && usesDesiredName
      && Number(index.expireAfterSeconds) === 0
      && partial.isVerified === false;

    if (!isDesired) {
      console.log(`Replacing conflicting MongoDB index: ${index.name}`);
      await User.collection.dropIndex(index.name);
    }
  }

  await User.collection.createIndex(
    { unverifiedDeleteAt: 1 },
    {
      name: desiredName,
      expireAfterSeconds: 0,
      partialFilterExpression: { isVerified: false }
    }
  );
}

async function prepareUnverifiedAccountCleanup() {
  const backfilled = await backfillUnverifiedDeletionDeadlines();
  if (backfilled) {
    console.log(`Added 24-hour deletion deadlines to ${backfilled} existing unverified account(s).`);
  }

  // Reconcile only the unverified-account TTL index. Existing unrelated indexes remain untouched.
  await ensureUnverifiedCleanupIndex();
  return cleanupExpiredUnverifiedUsers();
}

module.exports = {
  UNVERIFIED_ACCOUNT_LIFETIME_MS,
  deletionDeadlineFromSignup,
  backfillUnverifiedDeletionDeadlines,
  cleanupExpiredUnverifiedUsers,
  ensureUnverifiedCleanupIndex,
  prepareUnverifiedAccountCleanup
};
