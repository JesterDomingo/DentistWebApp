const express = require('express');
const{addAppointment, getBookings, updateBookings, deleteBooking} = require("../controller/controller");
router = express.Router();


//GET FUNCTIONS
router.get("/appointments", getBookings);
//POST FUNCTIONS
router.post("/bookappointments", addAppointment);
//PUT FUNCTIONS
router.put("/:id", updateBookings) //not yet working
//DELETE FUNCTIONS
router.delete("/deleteappointments/:id", deleteBooking)

module.exports = router