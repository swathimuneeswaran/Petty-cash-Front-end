import React,{useState} from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'
import Axios from "axios";
import {toast} from "react-hot-toast"
import "../App.css"


const AddIncome = () => {

    const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [email,setEmail] = useState("");
  const baseurl="http://localhost:5000"

  const navi=useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post(`${baseurl}/api/manager/add-income`, {
      email,
      title,
      amount,
      category,
      description,
      
    }).then(response => {
      if (response.data) {
        if (response.data.message === 'no token') {
          navigate("/login")
          toast.error("Session expired. Please login.");
          return; // Exit the function early to prevent further processing
      }
        toast.success("Your Income has been added💲")
        navi("/profile");
      }
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <>
    <Navbar></Navbar>
    <section className='position-relative py-5 overflow-hidden bg-primary' style={{height:"100vh",marginBottom:"50px"}}>
        <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-50 h-100"></div>
        <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
        <div className="container position-relative mx-auto">
            <div className="row align-items-center">
                <div className="col-12 col-lg-5 ">
                    <div>
                        <h2 className='display-7 fw-bold mb-4 text-white'style={{fontStyle:"italic"}}>
                            TRACK TOUR EXPENSES
                        </h2>
                        <hr style={{border: "2px solid yellow", textDecoration: "underline",width:"120px",marginLeft:"200px"}} className='line'></hr>
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-4bd5fc3ce0924cb9c9a5cddc1603bc91" className='gif' />
                    </div>
                </div>
                <div className="col-12 col-lg-5  col-sm-6 col-md-12 exp" >
                    <div className="p-5 bg-light rounded text-center">
                        <span className="text-muted" style={{fontStyle:"italic"}}>Add-Income</span>
                        <h3 className='fw-bold mb-5'style={{fontStyle:"italic"}}>INCOME</h3>

                        {/* {userAppErr || userServerErr ?<div className='alert alert-danger'role="alert" style={{width:"210px",margin:"auto"}}>{userServerErr}{userAppErr}</div>:null} */}
                        <form onSubmit={handleSubmit}>
                        <input className='form-control' type='email' placeholder='Email' style={{marginTop:"13px",border:"1px solid black"}}  onChange={(e) => setEmail(e.target.value)}></input>
                            <input className='form-control' type='title' placeholder='Title' style={{marginTop:"13px",border:"1px solid black"}}  onChange={(e) => setTitle(e.target.value)}></input>
                            <input className='form-control' type='amount' placeholder='Amount' style={{marginTop:"13px",border:"1px solid black"}}  onChange={(e) => setAmount(e.target.value)}></input>
                            <input className='form-control' type='category' placeholder='Category'style={{marginTop:"13px",border:"1px solid black"}}  onChange={(e) => setCategory(e.target.value)}></input>
                            <input className='form-control' type='text' placeholder='Description' style={{marginTop:"13px",border:"1px solid black"}}  onChange={(e) => setDescription(e.target.value)}></input>
                           
                            <button className="btn btn-primary" >Submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AddIncome