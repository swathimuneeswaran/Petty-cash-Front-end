import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import AddIncome from './components/AddIncome'
import AddExpense from './components/AddExpense'
// import Chart from './components/Chart'
// import Navbar from './components/Navbar'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path="/" element={<Navbar />}></Route> */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/signup" element={<Register />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    <Route path="/forgot-password" element={<ForgotPassword />}></Route>
    <Route path="/reset-password/:token" element={<ResetPassword />}></Route>
    <Route path="/add-income" element={<AddIncome />}></Route>
    <Route path="/add-expense" element={<AddExpense />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App