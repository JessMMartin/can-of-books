import React from 'react';

const AddBookButton = ({ handleAddBookClick }) => {
  return (
    <button onClick={handleAddBookClick}>Add Book</button>
  );
};

export default AddBookButton;
