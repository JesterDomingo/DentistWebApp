import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/DentalLogo.png";
import "../App.css";

const Header = () => {
  return (
    <div id="main-header">
      <img src={logo} alt="logo" className='logo'/>
      <h1>Dentist Appointment Booking</h1>
    </div>
  );
};

export default Header;