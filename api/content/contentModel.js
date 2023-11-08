// Define el modelo de MongoDB para el contenido multimedia
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  tags: [String],
  category: String,
  createdAt: { type: Date, default: Date.now },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
