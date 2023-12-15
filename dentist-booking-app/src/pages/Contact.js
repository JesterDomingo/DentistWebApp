import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/header"
import Footer from "../components/footer"

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <h2>Contact</h2>
      <Link to="/Home">
        <button>Contact</button>
      </Link>
      <Footer></Footer>
    </div>
  );
};

export default Contact;