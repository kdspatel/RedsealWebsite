const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../config/db');
const { cleanupExpiredUnverifiedUsers } = require('../services/unverifiedUserCleanup');

(async () => {
  try {
    await connectDB();
    const deleted = await cleanupExpiredUnverifiedUsers();
    console.log(`Cleanup complete. Deleted ${deleted} expired unverified account(s).`);
    process.exit(0);
  } catch (err) {
    console.error('Cleanup failed:', err);
    process.exit(1);
  }
})();
