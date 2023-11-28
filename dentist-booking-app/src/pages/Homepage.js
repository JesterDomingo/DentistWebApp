import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/header"
import Footer from "../components/footer"

const Homepage = () => {
  return (
    <div>
      <Header></Header>
      <h2>Homepage</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;