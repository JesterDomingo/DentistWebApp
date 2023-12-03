// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/DentalLogo.png";
import "../App.css";

const Header = () => {
  return (
    <div id="main-header" className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="logo" className='logo' />
          <h1>Smile Reborn</h1>
        </div>
        {/* Navigation buttons */}
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/aboutus" className="nav-link">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li>
              <Link to="/contactus" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Log in button */}
        <div>
          <Link to="/login" className="login-button">Log in</Link>
        </div>
        
        {/* Book Now button */}
        <div>
          <Link to="/booking"><button className="Booking">
            Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;