import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";

const formSchema = Yup.object({
  password: Yup.string().required("Password is required"),
});

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  // Axios.defaults.withCredentials = true;
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values) => {
      Axios.post(`/api/manager/reset-password/${token}`, {
        password: values.password,
      })
        .then((response) => {
          if (response.data.status) {
            toast.success("Password Updated Successfully");
            navigate("/login");
          }
          // console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="container content4">
        <div className="sign-up-container">
          <form className="sign-up-form" onSubmit={formik.handleSubmit}>
            <h2 style={{ fontStyle: "italic" }}>Reset Password</h2>
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              placeholder="********"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />

            <button
              type="submit"
              style={{
                marginTop: "30px",
                marginLeft: "60px",
                borderRadius: "30px",
              }}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
