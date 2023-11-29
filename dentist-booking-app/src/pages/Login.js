import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/header";
import Footer from "../components/footer";

const Login = () => {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', loginUser);

      if (response.data.success) {
        console.log('Login successful');
        localStorage.setItem('token', response.data.token); //Token Storage
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <Header></Header>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" value={loginUser.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={loginUser.password} onChange={handleChange} required />

        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <footer>
        <p>
          Don't have an account? <Link to="/signup"> Click Here</Link>.
        </p>
      </footer>
      <Footer></Footer>
    </div>
  );
};

export default Login;