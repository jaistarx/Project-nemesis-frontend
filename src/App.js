import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CustomizedTables from "./Components/Table/Table";
import Axios from 'axios'

Axios.defaults.baseURL='http://localhost:8080'



function App() {
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  if(udetails){
Axios.interceptors.request.use(
  config=>{
    config.headers.authorization=`Bearer ${udetails.token}`;
    return config;
  },
  error=>{
    return Promise.reject(error);
  }
)}

  // const authAxios=Axios.create({
  //   baseURL:Axios.defaults.baseURL,
  //   headers:{
  //     authorization:`Bearer ${udetails.token}`
  //   }
  // })
  
  return (
    <div>
      <Header></Header>
      <Router>
        <Log path="/login"></Log>
        <Signup path="/signup"></Signup>
        <Tab path="/table"></Tab>
      </Router>
    </div>
  );
}

function Log() {
  return <Login></Login>;
}
function Header() {
  return <ButtonAppBar></ButtonAppBar>;
}
function Sigup() {
  return <Signup></Signup>;
}
function Tab() {
  return <CustomizedTables></CustomizedTables>;
}

export default App;
