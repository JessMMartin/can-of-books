import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Best Books</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>The book collection is empty.</p>
      )}
    </div>
  );
};

export default BestBooks;
