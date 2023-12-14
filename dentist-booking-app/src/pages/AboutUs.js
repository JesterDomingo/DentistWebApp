// About.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import logo from "../images/DentalLogo.png";
import doctorImage1 from "../images/Doctor1.png";
import doctorImage2 from "../images/Doctor2.png";
import bannerAboutImage from "../images/AboutusBanner.gif";
import '../csspages/About.css'; // Update the import path for the CSS file


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content-box">
        <img src={bannerAboutImage} alt="banner about page" className='banner-about' />
        <h2>Welcome to Our Dentist Clinic</h2>
        <p>
          At our dentist clinic, we are committed to providing exceptional dental care in a comfortable and
          welcoming environment. Our experienced team of dentists and staff are dedicated to ensuring your
          oral health and creating beautiful smiles.
        </p>
        <h3>Why Choose Us?</h3>
        <ul className="feature-list">
          <li>
            <strong>Expert Dentists</strong> Our team consists of highly skilled and experienced dentists who
            are passionate about delivering top-notch dental care.
          </li>
          <li>
            <strong>State-of-the-Art Facilities</strong> We have modern and advanced dental facilities equipped
            with the latest technology to ensure the best possible treatment for our patients.
          </li>
          <li>
            <strong>Personalized Care</strong> Your oral health is unique, and we tailor our treatments to
            meet your specific needs. We believe in personalized care for every patient.
          </li>
          <li>
            <strong>Comprehensive Services</strong> From routine cleanings to complex procedures, we offer a wide
            range of dental services aimed at maintaining your oral health and enhancing your smile.
          </li>
          <li>
            <strong>Comfortable Environment</strong> We strive to create a comfortable and relaxing atmosphere
            for our patients, ensuring a stress-free experience during dental visits.
          </li>
          <li>
            <strong>Commitment to Excellence</strong> Our commitment is to deliver excellence in dental care,
            using the latest techniques and technology to achieve optimal results for our patients.
          </li>
          <li>
            <strong>Flexible Scheduling</strong> We understand the importance of time, and our flexible scheduling
            ensures that you can easily book appointments that suit your schedule.
          </li>
          <li>
            <strong>Continuing Education</strong> Our team regularly engages in continuing education and stays
            updated with the latest advancements in dental techniques and treatments.
          </li>
          <li>
            <strong>Transparent Communication</strong> We believe in open and transparent communication with our
            patients, ensuring you are well-informed about your treatment options and progress.
          </li>
          <li>
            <strong>Community Involvement</strong> We are dedicated to giving back to the community and participating
            in various dental health initiatives and events.
          </li>
          <li>
            <strong>Emergency Dental Care</strong> Our clinic provides emergency dental care services to address
            unexpected dental issues promptly.
          </li>
          <li>
            <strong>Modern Technology</strong> We leverage cutting-edge technology for precise diagnosis and
            efficient treatment, ensuring the best outcomes for our patients.
          </li>
          <li>
            <strong>Comforting Atmosphere</strong> Our clinic environment is designed to be warm, welcoming, and
            comforting to ease any dental anxieties you may have.
          </li>
          <li>
            <strong>Patient-Centered Approach</strong> We prioritize our patients' needs, preferences, and comfort
            in every aspect of our dental care services.
          </li>
          <li>
            <strong>Proven Results</strong> Our track record of successful treatments and satisfied patients
            speaks for our commitment to delivering effective dental solutions.
          </li>
        </ul>
      </div>
    </div>
  );
};


const About = () => {
  return (
    <div className="about-container">
      <Header />
      <Banner /> {}
      <div className="content-box">
      <img src={logo} alt="logo" className='logo' />
        <h2>Our Doctors</h2>
        <div className="doctor">
          <img src={doctorImage2} alt="Dr. Smith" />
          <h3>Dr. Emily Smith</h3>
          <p>Expertise: General Dentistry</p>
        </div>
        <div className="doctor">
          <img src={doctorImage1} alt="Dr. Johnson" />
          <h3>Dr. Michael Johnson</h3>
          <p>Expertise: Orthodontics</p>
        </div>
        <div class="doctor-services">
          <p>
            We offer a comprehensive range of dental services, including but not limited to:
          </p>
          <p>
            Routine cleanings and check-ups
          </p>
          <p>
            Fillings and restorations
          </p>
          <p>
            Root canal therapy
          </p>
          <p>
            Teeth whitening
          </p>
          <p>
            Orthodontic treatments
          </p>
          <p>
            Our goal is to provide personalized and top-quality care to address all your dental needs.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};


export default About;