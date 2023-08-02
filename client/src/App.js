// App.js (or index.js)

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BestBooks from './components/BestBooks';
import About from './components/About';

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

      <Switch>
        <Route exact path="/">
          <BestBooks />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
