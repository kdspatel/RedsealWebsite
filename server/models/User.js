const mongoose = require('mongoose');

const tradeAccessSchema = new mongoose.Schema(
  {
    trade: {
      type: String,
      required: true,
      trim: true
    },
    expiresAt: {
      type: Date,
      required: true
    },
    purchasedAt: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);


const mockTestAccessSchema = new mongoose.Schema(
  {
    trade: { type: String, required: true, trim: true },
    testNumber: { type: Number, default: 1 },
    purchasedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
    unlimitedAttempts: { type: Boolean, default: true },
    startedAt: { type: Date, default: null },
    lastAttemptAt: { type: Date, default: null },
    attemptCount: { type: Number, default: 0 },
    latestAttemptId: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttempt', default: null },

    // Legacy fields are kept so existing user records remain readable after deployment.
    completedAt: { type: Date, default: null },
    attemptId: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttempt', default: null }
  },
  { _id: true }
);


const singleLevelExamAccessSchema = new mongoose.Schema(
  {
    trade: { type: String, required: true, trim: true },
    level: { type: Number, required: true },
    quizNumber: { type: Number, default: 1 },
    purchasedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
    unlimitedAttempts: { type: Boolean, default: true },
    lastAttemptAt: { type: Date, default: null },
    attemptCount: { type: Number, default: 0 },
    latestAttemptId: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttempt', default: null }
  },
  { _id: true }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },

    province: { type: String, default: 'British Columbia', trim: true },
    marketingConsent: { type: Boolean, default: false },
    marketingConsentAt: { type: Date, default: null },

    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    verificationTokenExpires: { type: Date, default: null },
    unverifiedDeleteAt: { type: Date, default: null },

    signupIp: { type: String, default: null, index: true },
    signupDeviceId: { type: String, default: null, index: true },

    resetPasswordToken: { type: String, default: null },
    resetPasswordTokenExpires: { type: Date, default: null },

    hasPaid: { type: Boolean, default: false },

    articleRewardClaimsUsed: { type: Number, default: 0 },

    // Each trade has its own expiry
    tradeAccess: {
      type: [tradeAccessSchema],
      default: []
    },

    mockTestAccess: { type: [mockTestAccessSchema], default: [] },

    singleLevelExamAccess: { type: [singleLevelExamAccessSchema], default: [] },

    stripeCustomerId: { type: String, default: null },

    currentSessionToken: { type: String, default: null },
    lastLoginAt: { type: Date, default: null },
    lastLoginIp: { type: String, default: null },
    lastLoginUserAgent: { type: String, default: null }
  },
  { timestamps: true }
);

const UNVERIFIED_ACCOUNT_LIFETIME_MS = 24 * 60 * 60 * 1000;

userSchema.pre('validate', function setUnverifiedDeletionDeadline() {
  if (this.isVerified) {
    this.unverifiedDeleteAt = null;
    return;
  }

  if (!this.unverifiedDeleteAt) {
    const signupTime = this.createdAt instanceof Date ? this.createdAt : new Date();
    this.unverifiedDeleteAt = new Date(signupTime.getTime() + UNVERIFIED_ACCOUNT_LIFETIME_MS);
  }

});

userSchema.index(
  { unverifiedDeleteAt: 1 },
  {
    name: 'delete_unverified_accounts_after_24_hours',
    expireAfterSeconds: 0,
    partialFilterExpression: { isVerified: false }
  }
);

module.exports = mongoose.model('User', userSchema);