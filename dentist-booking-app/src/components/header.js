// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/DentalLogo.png";
import "../App.css";

const Header = () => {
  return (
    <div id="main-header" className="header-container">
      <div className="header-content">
        <div class="upper-header">
           {/* Log in button */}
          <div class="divider-class">
          <Link to="/login"> <button className="login-button">Log in</button></Link>
          </div>
        
          {/* Book Now button */}
          {/* <div class="divider-class">
            <Link to="/booking"><button className="Booking">
              Book Now</button>
            </Link>
          </div> */}
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
      </div>
    </div>
  );
};

export default Header;