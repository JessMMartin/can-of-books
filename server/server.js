const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const { createSampleBook } = require('./seed');
const Book = require('./models/Books.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mongoose setup (connecting to MongoDB)
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Create and save a sample book after the server starts
    createSampleBook();
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Book model setup (assuming you have defined the Book model in ./models/Books.js)

// Route handler for GET /books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find(); // Retrieve all books from the database using the Book model
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving books from the database.' });
  }
});



const PORT = process.env.PORT || 8090;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
