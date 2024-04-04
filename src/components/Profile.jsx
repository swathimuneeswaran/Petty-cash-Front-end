import React, {  useState,useEffect } from "react";
import Navbar from "./Navbar.jsx";
import '../App.css'

import { Link } from "react-router-dom";
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import {toast} from "react-hot-toast"
// import {Chart as ChartJS,ArcElement,Legend,Tooltip} from "chart.js"
import Chart from "./Chart.jsx"
import { baseurl } from "./url.js";




const Profile = () => {
  const [incomes, setIncomes] = useState([]);
  // const [email, setEmail] = useState('');
  const [totalIncome, setTotalIncome] = useState(0);
  const [expense, setExpense] = useState([]);
  // const [mail, setMail] = useState('');
  const [totalExp, setTotalExp] = useState(0);
  // const navigate=useNavigate()

  const cookies = document.cookie;

// Parse cookies into an object for easier access
const cookieArray = cookies.split(';').map(cookie => cookie.trim());
const cookieObject = {};
cookieArray.forEach(cookie => {
  const [key, value] = cookie.split('=');
  cookieObject[key] = value;
});

// Access specific cookie values
const id = localStorage.getItem('id');

// console.log(id); 
  





  Axios.defaults.withCredentials=true;
 

  const fetchIncomes = async () => {
    try {
      const response = await Axios.get(`${baseurl}/api/manager/get-incomes/${id}`);
      // console.log(response.data);
      setIncomes(response.data);
      
      // Calculate total income
      const total = response.data.reduce((acc, income) => acc + income.amount, 0);
      setTotalIncome(total);
      // toast.success("Your data is ready")
    } catch (error) {
      console.error("Error fetching incomes:", error);
      toast.error(error.message);
    }
  };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  

  const handleDelete=async(id)=>{

    // const id=incomes._id
     try{
      const response=await Axios.delete(`${baseurl}/api/manager/delete-income/${id}`)
      console.log(response);
     }
     catch(error){
       console.log(error)
     }
  }



  const fetchExpense = async () => {
    try {
      const response = await Axios.get(`${baseurl}/api/manager/get-expenses/${id}`);
      // console.log(response.data);
      setExpense(response.data);
      // Calculate total income
      const total = response.data.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalExp(total);
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };

//  useEffect(() => {
//     fetchIncomes();
//     fetchExpense();
//  });

  useEffect(() => {
    fetchIncomes();
    fetchExpense();
  }, []); 

  
  const handleDeleteExp=async(id)=>{

    // const id=incomes._id
     try{
      const response=await Axios.delete(`${baseurl}/api/manager/delete-expense/${id}`)
      console.log(response);
     }
     catch(error){
       console.log(error)
     }
  }



  const data={
    labels: ["Income","Expense"],
    datasets: [
        {
            label:"Total Incomes and Expenses",
            data: [totalIncome,totalExp],
            backgroundColor: [
               
                'rgb(153, 50, 204)',
                'rgba(45, 85,255)',
            ],
            borderColor: [
              
               ' rgba(153,50,204,10)',
               ' rgba(45, 85, 255,10)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: ["#9400D3","#0000FF"],
            fontColor:"white",
        }
    ]
}
const options = {
  plugins: {
    legend: {
      labels: {
        fontColor: 'Aqua' // Text color for legend labels
      }
    }
  }
};


const handleLogout=()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("id");
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
                          
                            <li className="nav-item mb-2">
                            <img src="https://lordicon.com/icons/wired/flat/291-coin-dollar.gif" style={{width:"60px",height:"50px"}}></img>
                            
                                </li>
                                <li>
                                <h2 style={{ marginLeft: "310px", fontFamily: "cursive", textShadow: "2px 2px violet", animation: "slideIn 1s ease" }} className="head1">INCOMES AND EXPENSES</h2>
                                </li>
                           
                        </ul>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form className='d-flex'>
                            <Link to ="/add-expense" className="btn btn-danger me-2">New Expense</Link>
                            <Link to ="/add-income" className="btn btn-success me-2">New Income</Link>
                            <Link to="/" onClick={handleLogout} className='btn btn-warning me-2'>Logout</Link>
                        </form>
                    </div>
                </div>
                </div>
       </nav>
      <div className="pro">
        {/* <img src="https://png.pngtree.com/thumb_back/fh260/background/20200630/pngtree-neon-double-color-futuristic-frame-colorful-background-image_340466.jpg"></img> */}
        {/* <section>
          <p style={{ marginLeft: "100px", fontFamily: "cursive", fontWeight: "bolder" }} className="watch">To see Your income and expenses</p>
          <input
            type="email"
            placeholder="email"
            style={{ width: "200px", marginLeft: "100px" }}
            className=" email mai"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type="submit"
            className="mail"
            style={{ width: "70px", marginLeft: "15px", height: "45px", borderRadius: "10px" }}
            onClick={handleGoClick}
          >
            Go
          </button>
        </section> */}
        
        <div className="col-12 col-lg-5 col-sm-8 col-md-6 box1" style={{ display: "flex", gap: "30px", marginTop: "0px" }}>
          <div>
            <section className="bg-dark van" style={{  color: "white", width: "300px", height: "130px", padding: "20px", marginLeft: "100px", borderRadius: "20px",marginTop:"50px",border:"2px solid white",boxShadow:"4px 4px 4px  violet"  }}>
              <h3 style={{ textAlign: "center",fontFamily: "cursive", fontWeight: "bolder" ,textShadow:"2px 1.5px  violet"}} className="in">💶Incomes</h3>
              <hr />
              <p>Total Incomes:  <FontAwesomeIcon icon={faIndianRupeeSign} style={{fontSize:"12px",color:"yellow"}} /> {totalIncome}</p>
            </section>
          </div>
          <div>
            <section className="bg-dark van" style={{  color: "white", width: "300px", height: "130px", padding: "20px", borderRadius: "20px",marginTop:"50px",border:"2px solid white",boxShadow:"4px 4px 4px  violet" }}>
              <h3 style={{ textAlign: "center" ,fontFamily: "cursive", fontWeight: "bolder",textShadow:"2px 1.5px  violet"}}>💰Expenses</h3>
              <hr />
              <p>Total Expenses:  <FontAwesomeIcon icon={faIndianRupeeSign} style={{fontSize:"12px",color:"yellow"}}/> {totalExp}</p>
            </section>
          </div>
          <section className="van" style={{marginTop:"50px",marginLeft:"40px",color:"white",backgroundColor:"transparent"}}>
            <Chart data={data} options={options}></Chart>
          </section>
        </div>


        <div style={{display:"flex",gap:"120px"}}  className="tab">
        <div  className="tab2">
          <h3 style={{ marginLeft: "240px", marginTop: "30px" ,fontStyle:"italic",fontFamily:"cursive",textDecoration:"1px overline white",textShadow:"3px 3px 3px red",color:"white"}} className="name">Income</h3>
          <table className="income-table"  >
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Type</th>
                <th scope="col" style={{ textAlign: "center" }}>Category</th>
                <th scope="col" style={{ textAlign: "center" }}>Amount</th>
                <th scope="col" style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody style={{color:"white"}} className="bod">
              {incomes.map((income, index) => (
                <tr key={index}>
                  <td>{income.type}</td>
                  <td>{income.category}</td>
                  <td><FontAwesomeIcon icon={faIndianRupeeSign} style={{fontSize:"14px",color:"yellow"}}/>{income.amount}</td>
                  <td>
                    <Link
                      to="/add-income"
                      type="button"
                      className="btn btn-primary add1"
                      style={{ width: "60px", marginLeft: "120px" ,fontStyle:"italic"}}
                      
                    >
                      Add
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger add2"
                      onClick={()=>handleDelete(income._id)}
                      style={{ width: "60px", marginLeft: "10px", padding: "4px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




        <div >
          <h3 style={{ marginTop: "30px" ,marginLeft: "240px",fontStyle:"italic",fontFamily:"cursive",textDecoration:"1px overline white",textShadow:"3px 3px 3px red",color:"white"}} className="name">Expense</h3>
          <table className="income-table">
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Type</th>
                <th scope="col" style={{ textAlign: "center" }}>Category</th>
                <th scope="col" style={{ textAlign: "center" }}>Amount</th>
                <th scope="col" style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody style={{color:"white"}} className="bod">
              {expense.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.type}</td>
                  <td>{expense.category}</td>
                  <td><FontAwesomeIcon icon={faIndianRupeeSign} style={{fontSize:"14px",color:"yellow"}}/>{expense.amount}</td>
                  <td>
                    <Link
                      to="/add-expense"
                      type="button"
                      className="btn btn-primary add1"
                      style={{ width: "60px", marginLeft: "120px",fontStyle:"italic" }}
                    >
                      Add
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger add2"
                      onClick={()=>handleDeleteExp(expense._id)}
                      style={{ width: "60px", marginLeft: "10px", padding: "4px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>






      </div>
    </>
  );
};

export default Profile;
