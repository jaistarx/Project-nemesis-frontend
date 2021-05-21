import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ILogIn } from "../../functions/user";
import  SnackBar from "../SnackBar/SnackBar"
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      
      //   width: "25ch",
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
    marginTop: "11%",
  },
  tfield: {
    marginTop: "3%",
  },
  input: {
    width: "50%",
    margin:"1% 0%"
  },
  button: {
    width: "20%",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmailid] = useState("");
  const [password, setPswd] = useState("");
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  const [buttonstate,setButtonstate]=useState(false)
  const handleSubmit = async () => {
    let result;
    setButtonstate(true)
    const data = {
      email,
      password,
    };
    try {
      result = await ILogIn(data);
      localStorage.setItem("AUTH", true);
      localStorage.setItem("User_details", JSON.stringify(result));
      window.location.reload();
      window.location.href = "/table";
    } catch (err) {
      console.log(err);
      setButtonstate(false)
      setSnack(true)
      setSuccerr("error")
      setDescri("Error !");
    }
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.head}>LOGIN</h1>
      <div className={classes.ip}>
        <div>
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
            label="password"
            variant="outlined"
            type="password"
            className={classes.input}
            onChange={(e) => setPswd(e.target.value)}
          />
        </div>
        <div className={classes.tfield}>
          <Button
            variant="outlined"
            color="primary"
            disabled={buttonstate}
            className={classes.button}
            onClick={handleSubmit}
          >
            login
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
