import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CreateBookForm = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    // Other form fields...
  });

  // Function to fetch book data by ID
  const fetchBookById = async (bookId) => {
    try {
      const response = await fetch(`/api/books/${bookId}`); // Replace with your API endpoint for getting book by ID
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        // Handle error if needed
        console.error('Failed to fetch book data:', data.message);
        return null;
      }
    } catch (error) {
      // Handle error if needed
      console.error('Error while fetching book data:', error);
      return null;
    }
  };

  useEffect(() => {
    // Fetch book data when the component mounts if there is an ID in the URL
    if (id) {
      fetchBookById(id).then((book) => {
        if (book) {
          setBookData(book);
        }
      });
    }
  }, [id]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic here...
  };

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // JSX for the form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          id="title" // Set the id attribute to "title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          name="genre"
          value={bookData.genre}
          onChange={handleChange}
        />
      </label>
      {/* Other form fields... */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateBookForm;
