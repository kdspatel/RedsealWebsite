const express = require('express');
const QuizAttempt = require('../models/QuizAttempt');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

function getPerformanceLabel(avg) {
  if (avg >= 85) return 'Exam Ready';
  if (avg >= 70) return 'Almost Ready';
  if (avg >= 55) return 'Needs Improvement';
  return 'Keep Practicing';
}

function getPassProbability(avg) {
  if (avg >= 90) return 'Very High';
  if (avg >= 80) return 'High';
  if (avg >= 65) return 'Moderate';
  if (avg >= 50) return 'Low';
  return 'Very Low';
}

router.post('/api/quiz-attempts', requireAuth, async (req, res) => {
  try {
    const {
      trade,
      section,
      mode,
      selectedCategory,
      totalQuestions,
      correctAnswers,
      percentage,
      timeSpentSeconds,
      categoryStats,
      wrongQuestions
    } = req.body;

    if (!trade || !totalQuestions) {
      return res.status(400).json({
        success: false,
        message: 'Missing required attempt data.'
      });
    }

    const attempt = await QuizAttempt.create({
      userId: req.session.userId,
      trade,
      section: section || 'Section 1',
      mode: mode || 'all',
      selectedCategory: selectedCategory || 'all',
      totalQuestions,
      correctAnswers,
      percentage,
      timeSpentSeconds: timeSpentSeconds || 0,
      categoryStats: Array.isArray(categoryStats) ? categoryStats : [],
      wrongQuestions: Array.isArray(wrongQuestions) ? wrongQuestions : []
    });

    return res.json({ success: true, attemptId: attempt._id });
  } catch (err) {
    console.error('Save attempt error:', err);
    return res.status(500).json({
      success: false,
      message: 'Could not save quiz result.'
    });
  }
});

router.get('/api/progress-summary', requireAuth, async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({
      userId: req.session.userId
    }).sort({ createdAt: -1 });

    if (attempts.length === 0) {
      return res.json({
        totalAttempts: 0,
        averageScore: 0,
        bestScore: 0,
        passProbability: 'Not Enough Data',
        performanceLabel: 'Start Practicing',
        weakAreas: [],
        recentAttempts: [],
        tradeStats: [],
        totalWrongQuestions: 0
      });
    }

    const totalAttempts = attempts.length;
    const averageScore = Math.round(
      attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts
    );
    const bestScore = Math.max(...attempts.map(a => a.percentage));

    const categoryMap = new Map();
    const tradeMap = new Map();
    let totalWrongQuestions = 0;

    for (const attempt of attempts) {
      totalWrongQuestions += attempt.wrongQuestions?.length || 0;

      if (!tradeMap.has(attempt.trade)) {
        tradeMap.set(attempt.trade, {
          trade: attempt.trade,
          attempts: 0,
          avgSum: 0,
          best: 0
        });
      }

      const tradeEntry = tradeMap.get(attempt.trade);
      tradeEntry.attempts += 1;
      tradeEntry.avgSum += attempt.percentage;
      tradeEntry.best = Math.max(tradeEntry.best, attempt.percentage);

      for (const stat of attempt.categoryStats || []) {
        if (!categoryMap.has(stat.category)) {
          categoryMap.set(stat.category, {
            category: stat.category,
            correct: 0,
            total: 0
          });
        }

        const entry = categoryMap.get(stat.category);
        entry.correct += stat.correct || 0;
        entry.total += stat.total || 0;
      }
    }

    const weakAreas = Array.from(categoryMap.values())
      .map(item => ({
        category: item.category,
        percentage: item.total ? Math.round((item.correct / item.total) * 100) : 0,
        mistakes: item.total - item.correct
      }))
      .sort((a, b) => {
        if (a.percentage !== b.percentage) return a.percentage - b.percentage;
        return b.mistakes - a.mistakes;
      })
      .slice(0, 5);

    const tradeStats = Array.from(tradeMap.values()).map(item => ({
      trade: item.trade,
      attempts: item.attempts,
      average: Math.round(item.avgSum / item.attempts),
      best: item.best
    }));

    const recentAttempts = attempts.slice(0, 8).map(a => ({
      trade: a.trade,
      section: a.section,
      percentage: a.percentage,
      correctAnswers: a.correctAnswers,
      totalQuestions: a.totalQuestions,
      createdAt: a.createdAt
    }));

    return res.json({
      totalAttempts,
      averageScore,
      bestScore,
      passProbability: getPassProbability(averageScore),
      performanceLabel: getPerformanceLabel(averageScore),
      weakAreas,
      recentAttempts,
      tradeStats,
      totalWrongQuestions
    });
  } catch (err) {
    console.error('Progress summary error:', err);
    return res.status(500).json({
      message: 'Could not load progress summary.'
    });
  }
});

router.get('/api/wrong-questions/:trade', requireAuth, async (req, res) => {
  try {
    const trade = req.params.trade;

    const attempts = await QuizAttempt.find({
      userId: req.session.userId,
      trade
    }).sort({ createdAt: -1 });

    const wrongMap = new Map();

    for (const attempt of attempts) {
      for (const q of attempt.wrongQuestions || []) {
        const key = `${q.questionId}`;
        if (!wrongMap.has(key)) {
          wrongMap.set(key, q);
        }
      }
    }

    return res.json({
      trade,
      questions: Array.from(wrongMap.values())
    });
  } catch (err) {
    console.error('Wrong questions fetch error:', err);
    return res.status(500).json({
      message: 'Could not load wrong questions.'
    });
  }
});

module.exports = router;