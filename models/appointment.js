const mongoose = require('mongoose');

const appointment = new mongoose.Schema({
    patientName:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        require: true
    },
    time:{
        type: String,
        required: true
    },
    dentistName: {
        type: String,
        required: true
    },
    bookingMade:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Appointment", appointment)