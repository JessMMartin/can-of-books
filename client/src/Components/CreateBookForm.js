import React, { useState } from 'react';

const CreateBookForm = ({ showForm, setShowForm }) => {
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    status: 'available',
    author: '', // Add the author field to the state
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8090/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book created successfully:', data);
        setShowForm(false); // Close the form after successful submission
      })
      .catch((error) => {
        console.error('Error creating book:', error);
        // Do something with the error, e.g., show an error message
      });
  };

  const handleCancel = () => {
    setShowForm(false); // Close the form when canceled
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={bookData.title}
        onChange={handleInputChange}
        placeholder="Book Title"
      />
      <input
        type="text"
        name="description"
        value={bookData.description}
        onChange={handleInputChange}
        placeholder="Book Description"
      />
      <input
        type="text" 
        name="author"
        value={bookData.author}
        onChange={handleInputChange}
        placeholder="Author Name"
      />
      <button type="submit">Create Book</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CreateBookForm;
