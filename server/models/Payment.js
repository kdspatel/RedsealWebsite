const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    trade: {
      type: String,
      default: null
    },
    level: { type: Number, default: null },
    quizNumber: { type: Number, default: null },
    purchaseType: {
      type: String,
      enum: ['premium_trade', 'mock_test', 'single_level_exam'],
      default: 'premium_trade'
    },
    stripeSessionId: {
      type: String,
      required: true,
      unique: true
    },
    stripeCustomerId: {
      type: String,
      default: null
    },
    amountTotal: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'cad'
    },
    status: {
      type: String,
      default: 'paid'
    },
    accessExpiresAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);