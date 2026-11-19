const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../config/db');
const User = require('../models/User');

(async () => {
  try {
    await connectDB();
    const result = await User.deleteMany({ isVerified: false });
    console.log(`Cleanup complete. Deleted ${result.deletedCount || 0} unverified account(s).`);
    process.exit(0);
  } catch (err) {
    console.error('Cleanup failed:', err);
    process.exit(1);
  }
})();
