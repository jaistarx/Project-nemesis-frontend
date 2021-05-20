import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    boxShadow:" 4px 4px grey",
  },
  head: {
    textAlign: "center",
    fontSize: "50px",
    marginTop: "7%",
  },
  tfield: {
    marginTop: "3%",
  },
  input:{
    width:"50%",
  },
  button:{
    width:"20%"
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.head}>LOGIN</h1>
      <div className={classes.ip}>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.input} />
        </div>
        <div className={classes.tfield}>
          <TextField id="outlined-basic" label="password" variant="outlined" className={classes.input} />
        </div>
        <div className={classes.tfield}>
          <Button variant="outlined" color="primary" className={classes.button}>
            login
          </Button>
        </div>
      </div>
    </div>
  );
}
