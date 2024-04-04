import React from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import { baseurl } from "./url.js";
import * as Yup from "yup";
import { useFormik } from "formik";


const formSchema = Yup.object({
    email: Yup.string().required("Email is required"),
  });

const ForgotPassword = () => {

    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
          email: "",
        },
        onSubmit: async(values) => {
          Axios
            .post(
              `${baseurl}/api/manager/forgot-password`,
              {
                email: values.email,
               
              },
              {
                withCredentials: true,
              }
            )
            .then((response) => {
              if (response.data) {
                toast.success("mail sent to your registered Mail Id")
                navigate("/login");
              }
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
              toast.error("Error Occured");
            });
        },
        validationSchema: formSchema,
      });
    
    
               
    // Axios.defaults.withCredentials = true;
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     Axios.post(`${baseurl}/api/manager/forgot-password`, {
    //         email,
    //     })
    //         .then((response) => {
    //             if (response.data.status) {
                  
    //                 toast.success("mail sent to your registered Mail Id")
    //                 navigate("/login");
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div className="container content3">
        <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={formik.handleSubmit}>
                <h2 style={{fontStyle:"italic"}}>Forgot Password</h2>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                />
                <button type="submit" style={{marginTop:"30px",marginLeft:"60px",borderRadius:"30px"}}>Send</button>
            </form>
        </div>
        </div>
    );
};

export default ForgotPassword;
