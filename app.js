const express = require('express');
const mongoose = require('mongoose');
const api = require("./routes/routes")
require("dotenv/config")

const app = express();

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/appointments", api)
app.get("/", (req, res) => {
    res.send("Dentist Web App")
})


//MongooseDB Connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Database connected");
})

app.listen(5000, () => {
    console.log("Server is Running");
})