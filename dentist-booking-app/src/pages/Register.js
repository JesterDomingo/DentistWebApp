import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/header";
import Footer from "../components/footer";

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
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form onSubmit={handleRegister}>
        <p>
          <label>Name</label><br />
          <input type="text" name="name" required onChange={handleChange} />
        </p>
        <p>
          <label>Email address</label><br />
          <input type="email" name="email" required onChange={handleChange} />
        </p>
        <p>
          <label>Password</label><br />
          <input type="password" name="password" required onChange={handleChange} />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{' '}
          <span>
            I agree all statements in{' '}
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              terms of service
            </a>
            .
          </span>
        </p>
        <p>
          <button id="sub_btn" type="submit">Register</button>
        </p>
      </form>
      <footer>
        <p>
          Already have an account?<Link to="/login">Click Here</Link>.
        </p>
      </footer>
      <Footer></Footer>
    </div>
  );
};

export default Register;