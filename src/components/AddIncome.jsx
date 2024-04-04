import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate,Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-hot-toast";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { baseurl } from "./url.js";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required!"),
  title: Yup.string().required("Title is required!"),
  amount: Yup.string().required("Amount is required!"),
  category: Yup.string().required("Category is required!"),
  description: Yup.string().required("Description is required!"),
});

const AddIncome = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      amount: "",
      category: "",
      description: "",
    },
    onSubmit: async (values) => {
      await Axios.post(`${baseurl}/api/manager/add-income`, {
        email:values.email,
        title:values.title,
        amount:values.amount,
        category:values.category,
        description:values.description,
      })
        .then((response) => {
          if (response) {
            toast.success("Your Income has been added");
            navigate("/profile");
          }
          console.log(response);
        })
        .catch((err) => {
          toast.error("An error has occurred.Please Login!");
          console.log(err);
        });
    },
    validationSchema: formSchema,
  });


  
  const handleLogout=()=>{
    toast.success("Successfully logged out")
  }


  return (
    <>
        <div style={{height:"50px"}}>  
    
    <form className="d-flex " style={{justifyContent:"end"}}>
    <img src="https://lordicon.com/icons/wired/flat/291-coin-dollar.gif" style={{width:"53px",height:"55px"}}></img>
      <Link to="/add-expense" className="btn btn-danger me-2" style={{height:"39px",marginTop:"5px",marginBottom:"3px"}}>
        New Expense
      </Link>
      <Link to="/add-income" className="btn btn-success me-2" style={{height:"39px",marginTop:"5px",marginBottom:"3px"}}>
        New Income
      </Link>
      <Link to="/" onClick={handleLogout} className="btn btn-warning me-2" style={{height:"39px",marginTop:"5px",marginBottom:"3px"}}>
        Logout
      </Link>
    </form>
    </div>
      <section
        className="position-relative py-5 overflow-hidden bg-primary"
        style={{ height: "110vh", marginBottom: "50px" }}
      >
        <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-50 h-100"></div>
        <div className="d-md-none position-absolute top-0 start-0 bg-primary w-150 h-100"></div>
        <div className="container position-relative mx-auto">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 ">
              <div>
                <h2
                  className="display-7 fw-bold mb-4 text-white"
                  style={{ fontStyle: "italic" }}
                >
                  TRACK TOUR INCOMES
                </h2>
                <hr
                  style={{
                    border: "2px solid yellow",
                    textDecoration: "underline",
                    width: "120px",
                    marginLeft: "200px",
                  }}
                  className="line"
                ></hr>
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-4bd5fc3ce0924cb9c9a5cddc1603bc91"
                  className="gif"
                  style={{borderRadius:"20px"}}
                />
              </div>
            </div>
            <div className="col-12 col-lg-5  col-sm-6 col-md-12 exp">
              <div className="p-5 bg-light rounded text-center">
                <span className="text-muted" style={{ fontStyle: "italic" }}>
                  Add-Income
                </span>
                <h3 className="fw-bold mb-5" style={{ fontStyle: "italic" }}>
                  INCOME
                </h3>

                {/* {userAppErr || userServerErr ?<div className='alert alert-danger'role="alert" style={{width:"210px",margin:"auto"}}>{userServerErr}{userAppErr}</div>:null} */}
                <form onSubmit={formik.handleSubmit}>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    style={{ marginTop: "13px", border: "1px solid black" }}
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  ></input>
                   <div className="text-danger mb-1 ">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <input
                    className="form-control"
                    type="title"
                    placeholder="Title"
                    style={{ marginTop: "13px", border: "1px solid black" }}
                    value={formik.values.title}
                    onChange={formik.handleChange("title")}
                    onBlur={formik.handleBlur("title")}
                  ></input>
                   <div className="text-danger mb-1 ">
                    {formik.touched.title && formik.errors.title}
                  </div>
                  <input
                    className="form-control"
                    type="amount"
                    placeholder="Amount"
                    style={{ marginTop: "13px", border: "1px solid black" }}
                    value={formik.values.amount}
                    onChange={formik.handleChange("amount")}
                    onBlur={formik.handleBlur("amount")}
                  ></input>
                    <div className="text-danger " >
                    {formik.touched.amount && formik.errors.amount}
                  </div>

                  <input
                    className="form-control"
                    type="category"
                    placeholder="Category"
                    style={{ marginTop: "13px", border: "1px solid black" }}
                    value={formik.values.category}
                    onChange={formik.handleChange("category")}
                    onBlur={formik.handleBlur("category")}
                  ></input>
                   <div className="text-danger">
                    {formik.touched.category && formik.errors.category}
                  </div>
                  <input
                    className="form-control"
                    type="description"
                    placeholder="Description"
                    style={{ marginTop: "13px", border: "1px solid black" }}
                    value={formik.values.description}
                    onChange={formik.handleChange("description")}
                    onBlur={formik.handleBlur("description")}
                  ></input>
                   <div className="text-danger mb-3">
                    {formik.touched.description && formik.errors.description}
                  </div>

                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddIncome;
