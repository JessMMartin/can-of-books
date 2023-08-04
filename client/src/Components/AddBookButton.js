import React from 'react';
import '../App.css';

const AddBookButton = ({ handleAddBookClick }) => {
  return (
    <button className='btn' onClick={handleAddBookClick}>Add Book</button>
  );
};

export default AddBookButton;
