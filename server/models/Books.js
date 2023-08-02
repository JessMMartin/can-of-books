// bookModel.js
const mongoose = require('mongoose');

// Define the 'Book' schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'borrowed', 'unavailable'],
    default: 'available',
  },
});

// Create the 'Book' model using the 'bookSchema'
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
