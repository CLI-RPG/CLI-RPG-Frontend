import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';
import Select from './pages/Select';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/select">Select</Link>
            </li>
          </ul>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
