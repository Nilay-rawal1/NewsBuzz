// newsRoutes.js
const express = require('express');
const News = require('./models/newsmodel');
const authMiddleware = require('./authMiddleware'); 

const router = express.Router();

// News Article Upload
router.post('/upload', authMiddleware, async (req, res) => {
  try {

    console.log('Request body:', req.body);
    const { title, content } = req.body;

    // Create a new news article
    const newNews = new News({ title, content, author: req.user._id });
    await newNews.save();

    res.status(201).json({ message: 'News article uploaded successfully' });
  } catch (error) {
    console.error('Error during news article upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
