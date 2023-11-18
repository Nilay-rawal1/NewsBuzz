// newsModel.js
const mongoose = require('./db'); // Import your mongoose connection

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // Add more fields as needed, such as author, date, etc.
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
