const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'borrowed', 'unavailable'],
    default: 'available',
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
