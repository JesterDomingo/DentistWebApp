const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if(!name){
      return res.json({
        error: 'name is required'
      })
    }

    if(!password || password.length < 6){
      return res.json({
        error: 'Password is required and should be atleast 6 characters long'
      })
    }
    
    const existingUser = await User.findOne({ email }); // Check if the user already exists
    if (existingUser) {
      return res.status(400).json({ 
        error: 'Email is taken' 
      });
    }

    const user = await User.create({
      name, email, password
    })
    // // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // // Create a new user
    // const newUser = new User({
    //   username,
    //   email,
    //   password: hashedPassword,
    // });

    // // Save the user to the database
    // await newUser.save();

    // Respond with a success message
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
};


const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email:email });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Compare the password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Respond with a success message or token for authentication
      res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Login failed' });
    }
  };
  
  module.exports = { registerUser, loginUser };