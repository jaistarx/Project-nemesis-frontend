import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ISignUp } from "../../functions/user";
import SnackBar from "../SnackBar/SnackBar";
import "./Signup.css"
import CirPro from "../CProgress/CProgress"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  ip: {
    backgroundColor: "white",
    textAlign: "center",
    marginRight: "25%",
    marginLeft: "25%",
    paddingTop: "2%",
    paddingBottom: "2%",
    border: "solid black 1px",
    borderRadius: "20px",
    boxShadow: " 6px 6px grey",
  },
  head: {
    textAlign: "center",
    fontSize: "50px",
    marginTop: "10%",
  },
  tfield: {
    marginTop: "3%",
  },
  input: {
    margin: "1% 2%",
  },
  inputadd: {
    width: "60%",
  },
  button: {
    width: "20%",
  },
}));

export default function Signup(props) {
  const classes = useStyles();
  const [name, setUsername] = useState("");
  const [email, setEmailid] = useState("");
  const [password, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");
  const [address, setAddr] = useState("");
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  const [buttonstate, setButtonstate] = useState(false);

  const handleSubmit = async () => {
    if (password === cpswd) {
      setButtonstate(true);
      let result;
      const data = {
        name,
        email,
        address,
        password,
      };
      try {
        result = await ISignUp(data);
        setSnack(true);
        setSuccerr("success");
        setDescri("User created successfully!");
        window.location.href = "/login";
        console.log(result);
      } catch (err) {
        console.log(err);
        setButtonstate(false);
        setSnack(true);
        setSuccerr("error");
        setDescri("User not created ! Try different Email Id");
      }
    } else {
      setSnack(true);
      setSuccerr("error");
      setDescri("Error ! password does not match");
    }
  };

  return (
    <div className={classes.root} className="bgpic">
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
            type="password"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setPswd(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Confirm password"
            type="password"
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
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            disabled={buttonstate}
            onClick={handleSubmit}
          >
            {buttonstate && <div style={{textAlign:"center",position:"absolute"}}><CirPro></CirPro></div>}
            signup
          </Button>
        </div>
      </div>
      {snack && (
        <SnackBar
          con={succerr}
          stat={snack}
          fun={setSnack}
          desc={descri}
        ></SnackBar>
      )}
    </div>
  );
}
