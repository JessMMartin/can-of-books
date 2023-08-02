const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const { createSampleBook } = require('./seed');
const Book = require('./models/Books'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mongoose setup (connecting to MongoDB)
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Comment out the createSampleBook() function call if you no longer want to seed the sample book
    // createSampleBook();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the application if MongoDB connection fails
  });

// Book model setup

// Route handler for GET /books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find(); // Retrieve all books from the database using the Book model
    res.json(books);
  } catch (err) {
    console.error('Error retrieving books:', err);
    res.status(500).json({ error: 'Error retrieving books from the database.' });
  }
});

// Route handler for POST /books
app.post('/books', async (req, res) => {
  try {
    const bookData = req.body;

    // Save the bookData to the database using the Book model
    const book = new Book(bookData);
    await book.save();

    res.status(201).json({ message: 'Book created successfully', book });
  } catch (err) {
    console.error('Error creating book:', err);
    res.status(500).json({ error: 'Error creating the book.', details: err.message });
  }
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
