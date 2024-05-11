import React from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";


const formSchema = Yup.object({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  // const baseurl = "https://petty-cash-back-end-06d4.onrender.com";
  // const baseurl="http://localhost:5000"

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    // Inside the onSubmit function in your React component
onSubmit: async (values) => {
  // console.log("Form values:", values); // Log form values before sending the request

  try {
    const response = await Axios.post(`/api/manager/signup`, values);
    // console.log("Response from backend:", response.data);
    navigate("/login")
    toast.success("Successfully registered😊")
    // Handle response from the backend
  } catch (error) {
    console.error("Error:", error);
    // Handle error
  }
},

    
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="container content" style={{ objectFit: "cover" }}>
        <div className="sign-up-container">
          <form
            className="sign-up-form"
            onSubmit={formik.handleSubmit}
            style={{ backgroundColor: "transparent" }}
          >
            <h2>Register</h2>

            <label htmlFor="firstname">Firstname:</label>
            <input
              className="form-control "
              type="firstname"
              placeholder="Firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="firstname" // Add name attribute
            />
            <div className="text-danger mb-1 " style={{marginLeft:"60px"}}>
              {formik.touched.firstname && formik.errors.firstname}
            </div>
            <label htmlFor="lastname">Lastname:</label>
            <input
              className="form-control "
              type="lastname"
              placeholder="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastname" // Add name attribute
            />
            <div className="text-danger mb-1 " style={{marginLeft:"60px"}}>
              {formik.touched.lastname && formik.errors.lastname}
            </div>
            <label htmlFor="email">Email:</label>
            <input
              className="form-control "
              type="email"
              placeholder="Email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email" // Add name attribute
            />
            <div className="text-danger mb-1 " style={{marginLeft:"60px"}}>
              {formik.touched.email && formik.errors.email}
            </div>

            <label htmlFor="password">Password</label>
            <input
              className="form-control "
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password" // Add name attribute
            />
            <div className="text-danger mb-1 " style={{marginLeft:"60px"}}>
              {formik.touched.password && formik.errors.password}
            </div>

            <button
              type="submit"
              style={{
                marginTop: "25px",
                marginLeft: "60px",
                borderRadius: "20px",
              }}
            >
              Register
            </button>
            <p style={{ marginTop: "20px" }}>
              Have an Account? <Link to="/login">Login</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
