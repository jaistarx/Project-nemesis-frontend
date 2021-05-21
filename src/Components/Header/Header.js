import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import jwt_decode from "jwt-decode";
import Countdown from "react-countdown";
import SnackBar from "../SnackBar/SnackBar";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginBottom: "60px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  if (udetails) {
    var decoded = jwt_decode(udetails.token);
  }
  function Clear() {
    localStorage.setItem("AUTH", false);
    localStorage.removeItem("User_details");
    window.location.reload();
    window.location.href = "/login";
  }
  function FTSeconds(e) {
    if (e.seconds === 15 && e.minutes === 0) {
      setSnack(true);
      setSuccerr("info");
      setDescri("This session is about to end!");
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.flex}>
              <div>Project-Nemesis</div>
              {udetails && (
                <div className={classes.timer}>
                  Session ends in :{" "}
                  {
                    <Countdown
                      date={decoded.exp * 1000}
                      onComplete={Clear}
                      controlled={false}
                      onTick={(e) => FTSeconds(e)}
                    />
                  }
                </div>
              )}
              <div></div>
            </div>
          </Typography>
          {!udetails && (
            <Button color="inherit" href="/signup">
              Signup
            </Button>
          )}
          {!udetails && (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
          {udetails && (
            <Button color="inherit" href="/login" onClick={Clear}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
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
