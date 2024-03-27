import React from "react";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import budget from "../img/budget.jpg";
import income from "../img/income.gif";
import expense from "../img/expense.png";
import "../App.css";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="position-relative pb-5">
        <img
          className="d-none d-lg-block position-absolute top-0 start-0 bottom-0 w-5- h-100 img-fluid"
          src={budget}
          style={{ objectFit: "cover", width: "40%",marginLeft:"50px" }}
          alt=""
        ></img>

        <div className="position-relative">
          <div className="container">
            <div className="row pt-5">
              <div className="col-12 col-md-6 col-lg-5 ms-auto">
                <div className="mb-5">
                  <h2 className="display-11 fw-bold mb-5">
                    Manage your amounts easily here..
                  </h2>
                  <p className="lead text-muted mb-5">
                    View all your income and expenses flow from your team
                  </p>
                  <div className="d-flex flex-wrap">
                    <Link
                      to="/signup"
                      className="btn btn-primary me-2 mb-2 mb-sm-0 sin"
                      style={{border:"2px solid blue"}}
                    >
                      Kick start your account
                    </Link>
                   
                  </div>
                </div>
                {/* <h1 className="text-danger">Admin Login</h1>
                            <p>Username:admin@gmail.com</p>
                            <p>password:12345</p> */}
                <div class="row align-items-center pt-5">
                  <div class="col-6 col-md-4 col-lg-3 col-xl-2 text-muted">
                    <img
                      class="income-image"
                      src={income}
                      alt="Income Image"
                    />
                  </div>
                  <div class="col-6 col-md-4 col-lg-3 col-xl-2 text-muted">
                    <img
                      class="expense-image"
                      src={expense}
                      alt="Expense Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
