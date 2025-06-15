const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Get questions based on subject and difficulty
router.get('/:subject/:difficulty', getQuestions);

// Submit user's score
router.post('/submit', submitScore);

module.exports = router;
