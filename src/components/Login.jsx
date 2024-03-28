import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseurl="https://petty-cash-back-end.onrender.com"
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseurl}/api/manager/login`, {
      email,
      password,
    },
    {
      withCredentials:true
    })
      .then((response) => {
        if (response.data) {
          navigate("/profile");
          toast.success("LoggedIn");
        }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className="container content2">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2 style={{fontStyle:"italic"}}>Login</h2>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={{marginTop:"30px",marginLeft:"60px",borderRadius:"20px"}}>Login</button><br></br>
          <Link to="/forgot-password" >Forgot Password?</Link>
         
          <p style={{marginTop:"10px"}}>
            Don't have Account? <Link to="/signup">Sign Up</Link>{" "}
          </p>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
