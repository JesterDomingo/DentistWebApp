import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast;'
import "./App.css";

function App() {
    return (
        <div>
            <Toaster position = 'bottom-right' toastOptions={{duration: 2000}}/>
           <Router>
                <Routes>
                    <Route path="/" element ={<Homepage/>}></Route>
                    <Route path="/login" element ={<Login/>}></Route>
                    <Route path="/signup" element ={<Register/>}></Route>
                    <Route path="/dashboard" element ={<Dashboard/>}></Route>
                </Routes>
           </Router>
        </div>
    );
}

export default App;
