import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../images/DentalLogo.png";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/signup', user);

      if (response.data.success) {
        console.log('Registration successful');
        navigate.push('/login');
      } else {
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div>
      <Header></Header>
      <div class="login-register-bar">
      <img src={logo} alt="logo" className='logo' />
        <h1>Join us</h1>
        <form onSubmit={handleRegister}>
            <label>Name</label>
            <input type="text" name="name" required onChange={handleChange} />
            <label>Email address</label>
            <input type="email" name="email" required onChange={handleChange} />
            <label>Password</label>
            <input type="password" name="password" required onChange={handleChange} />
            <span>
            <p>
            <input type="checkbox" name="checkbox" id="checkbox" required />{' '}
            I agree all statements in{' '}
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                terms of service
              </a>.
            </p>
            </span>
            <button id="sub_btn" type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Click Here</Link>.
        </p>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Register;