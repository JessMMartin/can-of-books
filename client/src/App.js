import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BestBooks from './Components/Bestbooks'; 
import About from './Components/About';
import CreateBookForm from './Components/CreateBookForm';
import AddBookButton from './Components/AddBookButton';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddBookClick = () => {
    setShowForm(true);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <AddBookButton handleAddBookClick={handleAddBookClick} />
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<BestBooks />} />
        <Route path="/about" element={<About />} />
        {showForm && <Route path="/create" element={<CreateBookForm showForm={showForm} setShowForm={setShowForm} />} />}
      </Routes>
    </Router>
  );
};

export default App;
