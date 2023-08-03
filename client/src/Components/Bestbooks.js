import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BestBooks = () => {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // Function to fetch book data from your backend (replace with your actual fetch code)
  const fetchBooks = () => {
    // Assuming your backend API endpoint to get books is http://localhost:8090/books
    fetch('http://localhost:8090/books')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data); // Update the state with the fetched book data
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        // Handle the error, e.g., show an error message
      });
  };

  useEffect(() => {
    // Fetch the books when the component mounts
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Best Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - <Link to={`/edit/${book._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestBooks;
