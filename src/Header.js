import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="logo2.png" alt="Website Logo" className="logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/campaign">Events</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="contribute-container">
        <button className="contribute-button">LOGIN / SIGN UP</button>
      </div>
    </header>
  );
};

export default Header;
