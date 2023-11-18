// newsRoutes.js
const express = require('express');
const News = require('./newsmodel'); // You need to define a News model

const router = express.Router();

// News Article Upload
router.post('/upload', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new news article
    const newNews = new News({ title, content });
    await newNews.save();

    res.status(201).json({ message: 'News article uploaded successfully' });
  } catch (error) {
    console.error('Error during news article upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
