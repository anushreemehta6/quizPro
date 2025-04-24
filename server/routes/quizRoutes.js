const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Get questions based on subject and difficulty
router.get('/questions/:subject/:difficulty', quizController.getQuestions);

// Submit user's score
router.post('/submit', quizController.submitScore);

module.exports = router;
