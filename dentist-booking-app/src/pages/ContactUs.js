// ContactUs.js
import React, { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import '../csspages/ContactUs.css'; // Create a new CSS file for styles

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here

    // Set the formSubmitted state to true after form submission
    setFormSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <Header />
      <div className="content-box">
        <h2 className="section-title">Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to contact us using the form below, and we'll get back to you as soon as possible.
        </p>

        {/* Display a message after form submission */}
        {formSubmitted ? (
          <p className="success-message">We will get in touch with you as soon as possible!</p>
        ) : (
          // Contact Form
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;