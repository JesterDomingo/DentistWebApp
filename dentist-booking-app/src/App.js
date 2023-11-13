import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        patientName: '',
        date: '',
        time: '',
        dentistName: '',
    });
    const [editAppointment, setEditAppointment] = useState(null);

    useEffect(() => {
        fetchAppointments();
    }, []);
      //GET
    const fetchAppointments = () => {
        axios.get('http://localhost:5000/appointments/showappointments')
            .then(response => setAppointments(response.data.data))
            .catch(error => console.error('Error fetching appointments:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value });
    };
    //POST
    const handleAddAppointment = () => {
        axios.post('http://localhost:5000/appointments/bookappointment', newAppointment)
            .then(response => {
                console.log('Appointment added:', response.data);
                fetchAppointments();
                setNewAppointment({
                    patientName: '',
                    date: '',
                    time: '',
                    dentistName: '',
                });
            })
            .catch(error => console.error('Error adding appointment:', error.response.data));
    };

    const handleEditAppointment = (appointment) => {
        setEditAppointment(appointment);
        setNewAppointment({
            patientName: appointment.patientName,
            date: appointment.date,
            time: appointment.time,
            dentistName: appointment.dentistName,
        });
    };
      //Update
    const handleUpdateAppointment = () => {
        axios.put(`http://localhost:5000/appointments/${editAppointment._id}`, newAppointment)
            .then(response => {
                console.log('Appointment updated:', response.data);
                fetchAppointments();
                setEditAppointment(null);
                setNewAppointment({
                    patientName: '',
                    date: '',
                    time: '',
                    dentistName: '',
                });
            })
            .catch(error => console.error('Error updating appointment:', error.response.data));
    };
      //DELETE
    const handleDeleteAppointment = (id) => {
        axios.delete(`http://localhost:5000/appointments/deleteappointment/${id}`)
            .then(response => {
                console.log('Appointment deleted:', response.data);
                fetchAppointments();
            })
            .catch(error => console.error('Error deleting appointment:', error.response.data));
    };
    
    //----------------------------------------------------------
    return (
        <div>
            <h1>Dentist Appointment Booking</h1>
            <div>
                <h2>Appointments Dashboard</h2>
                <ul>
                    {appointments.map(appointment => (
                        <li key={appointment._id}>
                            {`Patient: ${appointment.patientName}, Date: ${appointment.date}, Time: ${appointment.time}, Dentist: ${appointment.dentistName}`}
                            <button onClick={() => handleEditAppointment(appointment)}>
                                Edit
                            </button>
                            <button onClick={() => handleDeleteAppointment(appointment._id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>{editAppointment ? 'Update Appointment' : 'Add Appointment'}</h2>
                <form>
                    <label>Patient Name:</label>
                    <input
                        type="text"
                        name="patientName"
                        value={newAppointment.patientName}
                        onChange={handleInputChange}
                    />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={newAppointment.date}
                        onChange={handleInputChange}
                    />
                    <label>Time:</label>
                    <input
                        type="text"
                        name="time"
                        value={newAppointment.time}
                        onChange={handleInputChange}
                    />
                    <label>Dentist Name:</label>
                    <input
                        type="text"
                        name="dentistName"
                        value={newAppointment.dentistName}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={editAppointment ? handleUpdateAppointment : handleAddAppointment}>
                        {editAppointment ? 'Update Appointment' : 'Add Appointment'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
