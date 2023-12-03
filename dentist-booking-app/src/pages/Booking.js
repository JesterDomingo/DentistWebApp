// Booking.js
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from 'react-calendar'; // Import Calendar from react-calendar
import '../csspages/Booking.css';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    // Check if both date and time are selected
    if (selectedDate && selectedTime) {
      // In a real application, this is where you might make an API call to your backend
      // to store the booking information or perform any other necessary actions.

      setBookingSuccessful(true);

      // For now, let's just log the selected date and time to the console.
      console.log('Booking confirmed for:');
      console.log('Date:', selectedDate.toDateString());
      console.log('Time:', selectedTime.toLocaleTimeString());

      // Optionally, you can reset the selectedDate and selectedTime state after booking.
      // setSelectedDate(null);
      // setSelectedTime(null);
    } else {
      // Handle the case where either date or time is not selected.
      alert('Please select both date and time before confirming the booking.');
    }
  };

  return (
    <div>
      <Header />
      <div className="booking-container">
        <h2>Book an Appointment</h2>
        {bookingSuccessful ? (
          <p className="success-message">Booking successful! We look forward to seeing you.</p>
        ) : (
          <>
            <div className="date-time-picker">
              <label>Select Date:</label>
              {/* Use Calendar component for date picking */}
              <Calendar onChange={handleDateChange} value={selectedDate} />
              <label>Select Time:</label>
              <DatePicker
                selected={selectedTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
            <button onClick={handleBooking}>Confirm Booking</button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
