import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();  // Move the hook here at the top level

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleLoginSignupClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    
    window.location.href = '/login'; 
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="logo2.png" alt="Website Logo" className="logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/campaign">Events</Link></li>
          <li><Link to="/donatelist">Donation</Link></li>
        </ul>
      </nav>
      <div className="loginsignup-container">
        {isAuthenticated ? (
          <div className="user-info">
            <img src={user.picture} alt={user.name} className="user-picture" />
            <h2>{user.name}</h2>
            <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <button className="loginsignup-button" onClick={handleLoginSignupClick}>LOGIN / SIGN UP</button>
        )}
      </div>
    </header>
  );
};

export default Header;
