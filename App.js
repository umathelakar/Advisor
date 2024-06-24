import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import AdvisorInfo from './AdvisorInfo';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/advisor-info">Advisor Info</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/advisor-info" element={<AdvisorInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

