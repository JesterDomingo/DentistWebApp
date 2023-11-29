const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: 'Name is required',
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: 'Password is required and should be at least 6 characters long',
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: 'Email is taken',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ 
      name,
      email,
      password: hashedPassword, // Create new user hashed password
    });

    res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Registration failed', error: error.message });
  }
};



const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' }); //check if user exists
    }
    const passwordMatch = await bcrypt.compare(password, user.password); //password compare

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' }); // makes a JWT

    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
};
  
  module.exports = { registerUser, loginUser };