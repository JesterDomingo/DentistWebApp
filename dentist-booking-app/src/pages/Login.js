import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
    const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Header></Header>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email: </label>
        <input
          type="text"
          placeholder="Enter Email"
          value = {data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
        ></input>
        <label>Password: </label>
        <input
          type="text"
          placeholder="Enter Password"
          value = {data.password}
          onChange={(e) => setData({...data, password: e.target.value})}
        ></input>
        <input type="submit"/>

        <br />
        <p>OR</p>
        <br />

        <Link to="/signup">Sign up</Link>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Login;
