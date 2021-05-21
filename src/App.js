import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ButtonAppBar from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CustomizedTables from "./Components/Table/Table";
import Axios from "axios";
import ProtectedRoute from "./Components/ProtectedRoute/protectedRoute";
import NotSecureRoute from "./Components/ProtectedRoute/noSecureRoute";

Axios.defaults.baseURL = "https://nemesis-backend.herokuapp.com/";

function App() {
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  if (udetails) {
    Axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${udetails.token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <NotSecureRoute
            path="/login"
            component={Login}
            exact
            pathname="/table"
          />
          <NotSecureRoute
            path="/signup"
            component={Signup}
            exact
            pathname="/table"
          />
          <ProtectedRoute
            path="/table"
            component={CustomizedTables}
            exact
            pathname="/login"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Header() {
  return <ButtonAppBar></ButtonAppBar>;
}

export default App;
