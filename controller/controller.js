const booking = require("../models/appointment");

//GET ADD
const addAppointment = async (req, res) => {
    try{
        const { patientName } = req.body;
        const { date } = req.body;
        const { time } = req.body;
        const { dentistName } = req.body;
        const { bookingMade } = req.body;

        const newBooking = new booking({
            patientName: patientName,
            date: date,
            time: time,
            dentistName: dentistName,
            bookingMade: bookingMade,
        });

        const saveBooking = await newBooking.save();
        res.status(201).json({success: true, data: saveBooking});
    } catch (error){
        res
         .status(409)
         json({success: false, data: [], error: "Appointment cannot be booked."});
    }
};

//POST ALL
const getBookings = async (req, res) => {
    try{
        const bookings = await booking.find();
        res.status(200).json({success: true, data: bookings});
    } catch (error){
        res
            .status(409)
            . json({success: false, data: [], error: "No Appointments found"});
    }
};

//PUT (using ID)
const updateBookings = async (req, res) =>{
    const bookingId = req.params.id;
        const { patientName } = req.body;
        const { date } = req.body;
        const { time } = req.body;
        const { dentistName } = req.body;
        const { bookingMade } = req.body;

        try{
            const updateApt = await booking.findByIdAndUpdate(
                {_id: bookingId},
                {
                    $set: {
                        patientName: patientName,
                        date: date,
                        time: time,
                        dentistName: dentistName,
                        bookingMade: bookingMade,
                    },
                }
            );
            const updatedBooking = await booking.find({_id: bookingId});
            res.status(200).json({success: true, data: updatedBooking});
        } catch (error) {
            res
            .status(409)
            .json({
                success: false,
                data: [],
                error: "Appointment cannot be updated."
            })
        }
};

//DELETE (using ID)
const deleteBooking = async (req, res) => {
    const bookingId = req.params.id;
    try{
        const Booking = await booking.deleteOne({_id: bookingId});
        res.status(200).json({success: true, data: Booking});
    } catch (error){
        res
        .status(409)
        .json({sucess: false, data: [], error: "Appointment not found."})
    }
}

module.exports = {
    addAppointment,
    getBookings,
    updateBookings,
    deleteBooking
};
