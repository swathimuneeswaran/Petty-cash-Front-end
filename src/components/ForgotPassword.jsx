import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const baseurl="https://petty-cash-back-end.onrender.com"
               
    // Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(`${baseurl}/api/manager/forgot-password`, {
            email,
        })
            .then((response) => {
                if (response.data.status) {
                  
                    toast.success("mail sent to your registered Mail Id")
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container content3">
        <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2 style={{fontStyle:"italic"}}>Forgot Password</h2>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" style={{marginTop:"30px",marginLeft:"60px",borderRadius:"30px"}}>Send</button>
            </form>
        </div>
        </div>
    );
};

export default ForgotPassword;
