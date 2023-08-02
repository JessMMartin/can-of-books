
const mongoose = require('mongoose');
const Book = require('./models/Books.js'); 

async function createSampleBook() {
  try {
    // Create a new book instance
    const newBook = new Book({
      title: 'Sample Book',
      description: 'This is a sample book.',
      status: 'available',
    });

    // Save the book 
    const savedBook = await newBook.save();
    console.log('Book saved:', savedBook);
  } catch (err) {
    console.error('Error saving book:', err);
  }
}

// Export the seeder function
module.exports = { createSampleBook };
