import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../csspages/Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <Header />
      <div className="content-box">
        <h2 className="section-title">Our Services</h2>
        <p>
          At Smile Reborn Dental Clinic, we offer a comprehensive range of dental services to meet your oral health needs. Our experienced team of dental professionals is dedicated to providing high-quality and personalized care. Explore our services below:
        </p>

        <div className="service-item">
          <h3>Dental Check-ups and Cleanings</h3>
          <p>Regular check-ups and cleanings are essential for maintaining good oral health. Our team will assess your dental health and provide thorough cleanings to keep your smile bright.</p>
        </div>

        <div className="service-item">
          <h3>Teeth Whitening</h3>
          <p>Enhance the brightness of your smile with our professional teeth whitening services. Achieve a whiter and more radiant smile in a safe and controlled environment.</p>
        </div>

        <div className="service-item">
          <h3>Restorative Dentistry</h3>
          <p>Restore and strengthen damaged or missing teeth with our restorative dentistry options, including dental crowns, bridges, and implants.</p>
        </div>

        <div className="service-item">
          <h3>Orthodontic Treatments</h3>
          <p>Straighten your teeth and correct bite issues with our orthodontic treatments, including traditional braces and clear aligners.</p>
        </div>

        {/* Add more service items as needed */}
      </div>

      {/* Additional content if needed */}
      <Footer />
    </div>
  );
};

export default Services;
