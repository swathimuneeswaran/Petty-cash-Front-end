import React from 'react';
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast"
// import { useDispatch } from 'react-redux'; // Correct import statement

const Navbar = () => {
    // const dispatch = useDispatch(); // Corrected usage of useDispatch

    const handleLogout=()=>{
      toast.success("Successfully logged out")
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-white bg-white">
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand'>
                        <i className='bi bi-currency-exchange fs-1 text-warning'></i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link to="/expenses" className="nav-link active">Expense List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/incomes" className="nav-link active">Income List</Link>
                            </li> */}
                            <li className="nav-item mb-2">
                                <Link to="/signup" className="btn btn-outline-warning me-2" style={{fontStyle:"italic",fontWeight:"bolder"}}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-outline-primary me-2" style={{fontStyle:"italic",fontWeight:"bolder"}}>Login</Link>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <Link to ="/add-expense" className="btn btn-danger me-2">New Expense</Link>
                            <Link to ="/add-income" className="btn btn-success me-2">New Income</Link>
                            <Link to="/" onClick={handleLogout} className='btn btn-warning me-2'>Logout</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
