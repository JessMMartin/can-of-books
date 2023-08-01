const Book = mongoose.model('Book', bookSchema);
// Create a new book instance
const newBook = new Book({
  title: 'Sample Book',
  description: 'This is a sample book.',
  status: 'available',
});

// Save the book to the database
newBook.save()
  .then((savedBook) => {
    console.log('Book saved:', savedBook);
  })
  .catch((err) => {
    console.error('Error saving book:', err);
  });