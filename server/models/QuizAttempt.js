const mongoose = require('mongoose');

const categoryStatSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    correct: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  },
  { _id: false }
);

const wrongQuestionSchema = new mongoose.Schema(
  {
    questionId: { type: Number, required: true },
    category: { type: String, required: true },
    question: { type: String, required: true },
    correctAnswerIndex: { type: Number, required: true },
    selectedAnswerIndex: { type: Number, default: null }
  },
  { _id: false }
);

const quizAttemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    trade: {
      type: String,
      required: true
    },
    attemptType: {
      type: String,
      enum: ['practice', 'mock_test'],
      default: 'practice'
    },
    section: {
      type: String,
      default: 'Section 1'
    },
    mode: {
      type: String,
      default: 'all'
    },
    selectedCategory: {
      type: String,
      default: 'all'
    },
    totalQuestions: {
      type: Number,
      required: true
    },
    correctAnswers: {
      type: Number,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    },
    timeSpentSeconds: {
      type: Number,
      default: 0
    },
    categoryStats: {
      type: [categoryStatSchema],
      default: []
    },
    wrongQuestions: {
      type: [wrongQuestionSchema],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);