import React from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { baseurl } from "./url.js";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  // const baseurl="https://petty-cash-back-end-06d4.onrender.com"
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(
          `${baseurl}/api/manager/login`,
          {
            email: values.email,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.data) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("mail", response.data.email);
            navigate("/profile");
            toast.success("LoggedIn");
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: formSchema,
  });

  // axios.defaults.withCredentials = true;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`${baseurl}/api/manager/login`, {
  //     email,
  //     password,
  //   },
  //   {
  //     withCredentials:true
  //   })
  //     .then((response) => {
  //       if (response.data) {
  //         navigate("/profile");
  //         toast.success("LoggedIn");
  //       }
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className="container content2">
        <div className="sign-up-container">
          <form className="sign-up-form" onSubmit={formik.handleSubmit}>
            <h2 style={{ fontStyle: "italic" }}>Login</h2>

            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="text-danger mb-1 " style={{marginLeft:"60px"}}>
              {formik.touched.email && formik.errors.email}
            </div>

            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
            <div className="text-danger mb-1 " style={{marginLeft:"60px"}}>
              {formik.touched.password && formik.errors.password}
            </div>

            <button
              type="submit"
              style={{
                marginTop: "30px",
                marginLeft: "60px",
                borderRadius: "20px",
              }}
            >
              Login
            </button>
            <br></br>
            <Link to="/forgot-password">Forgot Password?</Link>

            <p style={{ marginTop: "10px" }}>
              Don't have Account? <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
