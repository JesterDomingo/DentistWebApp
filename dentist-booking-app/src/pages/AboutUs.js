import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import './About.css'; // Create a new CSS file for styles
import AboutusBanner from '../images/AboutusBanner.gif'; // Adjust the import path based on your project structure

const About = () => {
  return (
    <div>
      <Header /> {/* Include the Header component here */}

      <section className="banner-section" style={{ backgroundImage: `url(${AboutusBanner})` }}>
        <div className="banner-content">
          <h2>About Us</h2>
          {/* Add your banner content here */}
        </div>
      </section>

      <div className="content-box">
        <p className="section-title">Key Features:</p>
        <ul className="feature-list">
          <li>Skilled Dental Team: Our team consists of skilled and compassionate dental professionals who prioritize your dental health.</li>
          <li>State-of-the-Art Facilities: We utilize the latest dental technologies and maintain a clean and modern clinic environment.</li>
          <li>Comprehensive Services: From routine check-ups to advanced procedures, we offer a wide range of dental services tailored to your individual needs.</li>
          <li>Patient-Centric Approach: Your comfort and satisfaction are our top priorities. We strive to create a positive and stress-free dental experience.</li>
        </ul>
        <p>
          Thank you for choosing Smile Reborn Dental Clinic for your dental care needs. We look forward to helping you achieve and maintain a healthy, beautiful smile!
        </p>
      </div>

      {/* Additional content if needed */}
      <Footer />
    </div>
  );
};

export default About;
