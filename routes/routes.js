const express = require('express');
const{addAppointment, getBookings, updateBookings, deleteBooking} = require("../controller/controller");
router = express.Router();


//GET FUNCTIONS
router.get("/showappointments", getBookings);
//POST FUNCTIONS
router.post("/bookappointment", addAppointment);
//PUT FUNCTIONS
router.put("/:id", updateBookings);
//DELETE FUNCTIONS
router.delete("/deleteappointment/:id", deleteBooking);

module.exports = router