import React, {  useState } from "react";
import Navbar from "./Navbar.jsx";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import {toast} from "react-hot-toast"
import {Chart as ChartJS,ArcElement,Legend,Tooltip} from "chart.js"
import Chart from "./Chart.jsx"




const Profile = () => {
  const [incomes, setIncomes] = useState([]);
  const [email, setEmail] = useState('');
  const [totalIncome, setTotalIncome] = useState(0);
  const [expense, setExpense] = useState([]);
  // const [mail, setMail] = useState('');
  const [totalExp, setTotalExp] = useState(0);
  const navigate=useNavigate()
  





  axios.defaults.withCredentials=true;
  const baseurl = "https://petty-cash-back-end.onrender.com";

  const fetchIncomes = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/manager/get-incomes/${email}`);
      console.log(response.data);
      if (response.data.message === 'no token') {
        navigate("/login")
        toast.error("Session expired. Please login.");
        return; // Exit the function early to prevent further processing
    }
      setIncomes(response.data);
      
      // Calculate total income
      const total = response.data.reduce((acc, income) => acc + income.amount, 0);
      setTotalIncome(total);
      toast.success("Your data is ready")
    } catch (error) {
      console.error("Error fetching incomes:", error);
      toast.error(error.message);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  

  const handleDelete=async(id)=>{

    // const id=incomes._id
     try{
      const response=await axios.delete(`${baseurl}/api/manager/delete-income/${id}`)
      console.log(response);
     }
     catch(error){
       console.log(error)
     }
  }



  const fetchExpense = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/manager/get-expenses/${email}`);
      console.log(response.data);
      setExpense(response.data);
      // Calculate total income
      const total = response.data.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalExp(total);
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };

  const handleGoClick = () => {
    fetchIncomes();
    fetchExpense();
  };

  // useEffect(() => {
  //   fetchIncomes();
  //   fetchExpense();
  // }, []); 

  
  const handleDeleteExp=async(id)=>{

    // const id=incomes._id
     try{
      const response=await axios.delete(`${baseurl}/api/manager/delete-expense/${id}`)
      console.log(response);
     }
     catch(error){
       console.log(error)
     }
  }

  
  // const data=[
  //   {name:"Income",value:totalIncome},
  //   {name:"Expense",value:totalExp},
  // ]


  // const [labels, setLabels] = useState(data.map((item) => item.name));
  // const [datasets, setDatasets] = useState([
  //   {
  //     label: "Incomes and Expenses",
  //     data: data.map((item) => item.value),
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //     ],
  //     borderColor: "black",
  //     borderWidth: 2,
  //   }
  // ]);


  const data={
    labels: ["Income","Expense"],
    datasets: [
        {
            label:"Total Incomes and Expenses",
            data: [totalIncome,totalExp],
            backgroundColor: [
               
                'rgba(0, 255,0,0.2)',
                'rgba(255, 0,0,0.2)',
            ],
            borderColor: [
              
               ' rgba(0,255,0,1)',
               ' rgba(255, 0, 0,1)',
            ],
            borderWidth: 1,
            hoverBackgroundColor: ["#008000","#FF0000"]
        }
    ]
}

  




  return (
    <>
      <Navbar></Navbar>
      <div className="pro">
        <section>
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
        </section>
        
        <div className="col-12 col-lg-5 col-sm-8 col-md-6 box1" style={{ display: "flex", gap: "30px", marginTop: "40px" }}>
          <div>
            <section className="bg-dark van" style={{ border: "1px solid black", color: "white", width: "300px", height: "130px", padding: "20px", marginLeft: "100px", borderRadius: "20px" }}>
              <h3 style={{ textAlign: "center",fontFamily: "cursive", fontWeight: "bolder" }} className="in">💶Incomes</h3>
              <hr />
              <p>Total Incomes:  <FontAwesomeIcon icon={faIndianRupeeSign} style={{fontSize:"12px",color:"yellow"}} /> {totalIncome}</p>
            </section>
          </div>
          <div>
            <section className="bg-dark van" style={{ border: "1px solid black", color: "white", width: "300px", height: "130px", padding: "20px", borderRadius: "20px" }}>
              <h3 style={{ textAlign: "center" ,fontFamily: "cursive", fontWeight: "bolder"}}>💰Expenses</h3>
              <hr />
              <p>Total Expenses:  <FontAwesomeIcon icon={faIndianRupeeSign} style={{fontSize:"12px",color:"yellow"}}/> {totalExp}</p>
            </section>
          </div>
          <section className="van">
            <Chart data={data}></Chart>
          </section>
        </div>


        <div style={{display:"flex",gap:"120px"}}  className="tab">
        <div  className="tab2">
          <h3 style={{ marginLeft: "240px", marginTop: "30px" ,fontStyle:"italic",fontFamily:"cursive",textDecoration:"1px overline black",textShadow:"3px 3px 3px red"}} className="name">Income</h3>
          <table className="income-table"  >
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Type</th>
                <th scope="col" style={{ textAlign: "center" }}>Category</th>
                <th scope="col" style={{ textAlign: "center" }}>Amount</th>
                <th scope="col" style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((income, index) => (
                <tr key={index}>
                  <td>{income.type}</td>
                  <td>{income.category}</td>
                  <td>₹{income.amount}</td>
                  <td>
                    <Link
                      to="/add-income"
                      type="button"
                      className="btn btn-primary"
                      style={{ width: "60px", marginLeft: "120px" }}
                    >
                      Add
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
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
          <h3 style={{ marginTop: "30px" ,marginLeft: "240px",fontStyle:"italic",fontFamily:"cursive",textDecoration:"1px overline black",textShadow:"3px 3px 3px red"}} className="name">Expense</h3>
          <table className="income-table">
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>Type</th>
                <th scope="col" style={{ textAlign: "center" }}>Category</th>
                <th scope="col" style={{ textAlign: "center" }}>Amount</th>
                <th scope="col" style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {expense.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.type}</td>
                  <td>{expense.category}</td>
                  <td>₹{expense.amount}</td>
                  <td>
                    <Link
                      to="/add-expense"
                      type="button"
                      className="btn btn-primary"
                      style={{ width: "60px", marginLeft: "120px" }}
                    >
                      Add
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
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
