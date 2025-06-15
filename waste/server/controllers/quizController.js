const data = {
    dsa: require('../data/dsa'),
  dbms: require('../data/dbms'),
  os: require('../data/os'),
  oops: require('../data/oops'),
  cpp: require('../data/cpp'),
  cn: require('../data/cn'),
  nlm: require('../data/nlm'),
  linux: require('../data/linux')
  };
  
  const User = require('../models/User');
  
  // GET questions
  const getQuestions = (req, res) => {
    const { subject, difficulty } = req.params;
    const subjectData = data[subject];
  
    if (!subjectData) return res.status(404).json({ error: "Subject not found" });
    const questions = subjectData[difficulty];
    if (!questions) return res.status(404).json({ error: "Difficulty not found" });
  
    res.json(questions);
  };
  
  // POST score
  const submitScore = async (req, res) => {
    const { name, subject, difficulty, score } = req.body;
    try {
      const newUser = new User({ name, subject, difficulty, score });
      await newUser.save();
      res.status(200).json({ message: "Score saved successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Failed to save score" });
    }
  };
  
  module.exports = { getQuestions, submitScore };
  