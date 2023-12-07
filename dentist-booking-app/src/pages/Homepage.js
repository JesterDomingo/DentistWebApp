// Homepage.js
import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../csspages/Homepage.css'; // Update the import path
import bannerGIF from '../images/HomepageBanner.gif'; // Adjust the relative path based on your project structure
import Chart from 'chart.js/auto';

const Homepage = () => {
  useEffect(() => {
    // Create a simple star rating chart
    const ctx = document.getElementById('starChart');

    if (ctx) {
      const starData = [5, 4, 3, 5, 5]; // Replace this with your actual star ratings data
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Testimonial 1', 'Testimonial 2', 'Testimonial 3', 'Testimonial 4', 'Testimonial 5'],
          datasets: [{
            label: 'Stars',
            data: starData,
            backgroundColor: 'rgba(255, 206, 86, 0.7)', // Adjust color as needed
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 5, // Adjust based on your rating scale
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <Header />

      {/* Banner Section */}
      <section className="banner-section" style={{ backgroundImage: `url(${bannerGIF})` }}>
        <div className="banner-content">
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
          <p>Very Clean clinic.</p>
          <div className="rating">★★★★☆</div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial">
          <p>Skilled team, fantastic experience..</p>
          <div className="rating">★★★☆☆</div>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial">
          <p>Exceptional service, highly recommended.</p>
          <div className="rating">★★★★★</div>
        </div>

        {/* Testimonial 5 */}
        <div className="testimonial">
          <p>Fifth testimonial content.</p>
          <div className="rating">★★★★★</div>
        </div>
      </section>

      {/* Star Rating Chart */}
      <section>
        <h2>Stars Average</h2>
        <canvas id="starChart" width="400" height="200"></canvas>
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
    <Footer></Footer>
    </div>
  );
};
 <Footer />
export default Homepage;