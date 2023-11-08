// Define el modelo de MongoDB para los metadatos
const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema({
  contentId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  tags: [String],
  category: String,
  createdAt: { type: Date, default: Date.now },
});

const Metadata = mongoose.model('Metadata', metadataSchema);

module.exports = Metadata;
