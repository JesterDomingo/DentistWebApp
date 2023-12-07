import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import Booking from './pages/Booking';
import { Toaster } from 'react-hot-toast;'
import "./App.css";


function App() {
    return (
        <div>
            <Toaster position = 'bottom-right' toastOptions={{duration: 2000}}/>
           <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/login" element ={<Login/>} />
                    <Route path="/booking" element ={<Booking/>} />
                    <Route path="/signup" element ={<Register/>} />
                    <Route path="/dashboard" element ={<Dashboard/>} />
                </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;