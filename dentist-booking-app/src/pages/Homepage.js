// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import './Homepage.css'; // Update the import path
import bannerGIF from '../images/HomepageBanner.gif'; // Adjust the relative path based on your project structure

const Homepage = () => {
  return (
    <div>
      <Header />

      Banner Section
      <section
        style={{
          background: `url(${bannerGIF}) center/cover no-repeat`,
          height: '100vh', // Set height to 100% of the viewport height
          width: '100%',   // Set width to 100% of the viewport width
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '80%',  // Set maximum width for larger screens
            width: '100%',    // Set width to 100% of the viewport width
            padding: '20px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h2>Banner Section</h2>
          {/* Add your banner content here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-container">
        <h2>What Our Patient Say</h2>

        {/* Testimonial 1 */}
        <div className="testimonial">
          <p>I am really satisfied to use this app.</p>
          <div className="rating">★★★★★</div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial">
          <p>Another testimonial content.</p>
          <div className="rating">★★★★☆</div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial">
          <p>One more testimonial content.</p>
          <div className="rating">★★★☆☆</div>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial">
          <p>Yet another testimonial content.</p>
          <div className="rating">★★★★★</div>
        </div>

        {/* Testimonial 5 */}
        <div className="testimonial">
          <p>Fifth testimonial content.</p>
          <div className="rating">★★★★★</div>
        </div>
      </section>

      {/* Live Map Section */}
      <section>
        <h2>Live Map Section</h2>
        <div style={{ height: '500px', width: '100%' }}>
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=941 progress avenue&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      {/* Login Button */}
      <Link to="/login">
        <button>Login</button>
      </Link>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Homepage;
