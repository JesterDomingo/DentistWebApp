import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {                         //REGISTER LOGIC DOES NOT WORK, IDK IF LOGIN WORKS TOO...
  const navigate = useNavigate();                        //IF YOU WANT TO ACCESS THE BOOKING GO http://localhost:3000/dashboard
  const [ data, setData] = useState({
    username: '',
    email: '',
    password: '',
  })
    const registerUser = async (e)=>{
        e.preventDefault()
        const {name, email, password} = data
        try{
          const {data} = await axios.post('/signup', {
            name, email, password
          })
        if(data.error){
          toast.error(data.error)
        } else{
          setData({})
          toast.success('Login Successful, Welcome')
          navigate('/login')
        }
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          value = {data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
        />
        <label>Email:</label>
        <input
          type="text"
          placeholder="email"
          value = {data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          value = {data.password}
          onChange={(e) => setData({...data, password: e.target.value})}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
