import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BestBooks from './Components/Bestbooks';
import About from './Components/About';
import CreateBookForm from './Components/CreateBookForm';
import AddBookButton from './Components/AddBookButton';
import './App.css'; // Import the original App.css file

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddBookClick = () => {
    setShowForm(true);
  };

  return (
    <Router>
      <nav className="centered-navigation"> {/* Apply centered-navigation class */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={handleAddBookClick} className="btn"> {/* Add btn class */}
              Add Book
            </button>
            <span className="tooltip">
              <span className="tooltiptext">Add a new book</span>
            </span>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<BestBooks />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/create"
          element={
            <CreateBookForm
              showForm={showForm}
              setShowForm={setShowForm}
              editBookData={null} // Initially, set to null for create mode
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <CreateBookForm
              showForm={showForm}
              setShowForm={setShowForm}
              editBookData={/* Replace with actual book data you want to edit */ null}
            />
          }
        />
      </Routes>
      {showForm && <AddBookButton />}
    </Router>
  );
};

export default App;
