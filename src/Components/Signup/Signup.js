import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {SignUp} from "../../functions/user"
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      //   width: "25ch",
    },
  },
  ip: {
    textAlign: "center",
    marginRight: "25%",
    marginLeft: "25%",
    paddingTop: "2%",
    paddingBottom: "2%",
    border: "solid black 1px",
    borderRadius: "20px",
    boxShadow: " 4px 4px grey",
  },
  head: {
    textAlign: "center",
    fontSize: "50px",
    marginTop: "7%",
  },
  tfield: {
    marginTop: "3%",
  },
  input: {
    margin: "0% 2%",
  },
  inputadd: {
    width: "60%",
  },
  button: {
    width: "20%",
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [name,setUsername]=useState("")
  const [email,setEmailid]=useState("")
  const [password,setPswd]=useState("")
  const [cpswd,setCpswd]=useState("")
  const [address,setAddr]=useState("")

  const handleSubmit = async () => {
    let result;
    const data = {
        name,
        email, 
        address,
        password,
    };
    try {
      result = await SignUp(data);
    //   localStorage.setItem("AUTH", true);
    //   localStorage.setItem("User_details", JSON.stringify(result));
    //   props.history.push("/dashboard");
    //   window.location.reload();
    console.log(result)
    } catch (err) {
      console.log(err);
      const {
        err: { code },
      } = err;
      if (code === "23505") {
        alert("The username already exist");
      } else {
        alert("Something went wrong");
      }
    }
  };


  return (
    <div className={classes.root}>
      <h1 className={classes.head}>SIGNUP</h1>
      <div className={classes.ip}>
        <div>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setEmailid(e.target.value)}
          />
        </div>
        <div className={classes.tfield}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setPswd(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setCpswd(e.target.value)}
          />
        </div>
        <div className={classes.tfield}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            className={classes.inputadd}
            onChange={(e) => setAddr(e.target.value)}
          />
        </div>
        <div className={classes.tfield}>
          <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit}>
            signup
          </Button>
        </div>
      </div>
    </div>
  );
}
