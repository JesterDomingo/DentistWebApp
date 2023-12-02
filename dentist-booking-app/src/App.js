import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import About from './pages/AboutUs'
import Services from './pages/Services'
import Contact from './pages/ContactUs'
import { Toaster } from 'react-hot-toast;'
import "./App.css";

function App() {
    return (
        <div>
            <Toaster position = 'bottom-right' toastOptions={{duration: 2000}}/>
           <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage/>} />
                    <Route path="/about" element={<AboutUs/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/login" element ={<Login/>} />
                    <Route path="/signup" element ={<Register/>} />
                    <Route path="/dashboard" element ={<Dashboard/>} />
                </Routes>
           </BrowserRouter>
        </div>
    );
}

export default App;