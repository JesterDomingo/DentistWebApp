import React, { useState } from 'react';
import Modal from 'react-modal';
import Footer from '../components/footer';
import Header from '../components/header';
import './About.css'; // Create a new CSS file for styles
import AboutusBanner from '../images/AboutusBanner.gif'; // Adjust the import path based on your project structure
import DoctorImage1 from '../images/Doctor1.png'; // Use the correct import path for the doctor image
import DoctorImage2 from '../images/Doctor2.png'; // Use the correct import path for the second doctor image
import DoctorImage3 from '../images/Doctor3.png'; // Add import for the third doctor image
import DoctorImage4 from '../images/Doctor4.png'; // Add import for the fourth doctor image

Modal.setAppElement('#root'); // Set the root element for accessibility

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Dentistry', image: DoctorImage1 },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Orthodontics', image: DoctorImage2 },
    { id: 3, name: 'Dr. Michael Johnson', specialty: 'Oral Surgery', image: DoctorImage3 },
    { id: 4, name: 'Dr. James Davis', specialty: 'Periodontics', image: DoctorImage4 },
  ];

  return (
    <div>
      <Header />

      <section className="banner-section" style={{ backgroundImage: `url(${AboutusBanner})` }}>
        <div className="banner-content">
          {/* Add your banner content here if needed */}
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section className="doctors-section">
        <h2 className="doctors-heading">Meet Our Doctors</h2>

        {doctors.map((doctor) => (
          <div className="doctor-card landscape" key={doctor.id} onClick={() => openModal(doctor)}>
            <img className="doctor-image" src={doctor.image} alt={doctor.name} />
            <div className="doctor-details">
              <p className="doctor-name">{doctor.name}</p>
              <p className="doctor-specialty">Specialty: {doctor.specialty}</p>
              {/* Add other details as needed */}
            </div>
          </div>
        ))}
      </section>

      {/* Modal for Doctor Details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Doctor Details Modal"
      >
        <div>
          <div className="modal-header">
            <h2>{selectedDoctor.name}</h2>
            <button className="close-button" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <img className="modal-doctor-image" src={selectedDoctor.image} alt={selectedDoctor.name} />
          <p>{selectedDoctor.specialty}</p>
          {/* Add other details as needed */}
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default About;
