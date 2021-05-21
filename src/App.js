import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import "./App.css";
import ButtonAppBar from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CustomizedTables from "./Components/Table/Table";
import Axios from 'axios'
import ProtectedRoute from './Components/ProtectedRoute/protectedRoute'
import NotSecureRoute from './Components/ProtectedRoute/noSecureRoute'

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
      {/* <Router>
        <Log path="/login"></Log>
        <Log path="/"></Log>
        <Signup path="/signup"></Signup>
        <Tab path="/table"></Tab>
      </Router> */}
      <BrowserRouter>
      <Switch>
      <Route path='/'  component={Login} exact/>
      <NotSecureRoute path='/login' component={Login} exact pathname='/table' />
        <NotSecureRoute path='/signup' component={Signup} exact pathname='/table' />
        <ProtectedRoute path='/table' component={CustomizedTables} exact pathname='/login'/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

// function Log() {
//   return <Login></Login>;
// }
function Header() {
  return <ButtonAppBar></ButtonAppBar>;
}
// function Sigup() {
//   return <Signup></Signup>;
// }
// function Tab() {
//   return <CustomizedTables></CustomizedTables>;
// }

export default App;
