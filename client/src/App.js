

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import BestBooks from './Components/Bestbooks';
import About from './Components/About';

const App = () => {
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
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<BestBooks/>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
