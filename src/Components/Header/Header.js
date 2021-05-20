import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let udetails = JSON.parse(localStorage.getItem("User_details"));
  if(udetails){
    var decoded = jwt_decode(udetails.token);
    console.log(decoded)
  }
  function Clear(){
    localStorage.setItem("AUTH", false);
    localStorage.removeItem("User_details");
    window.location.href('/login')
    window.location.reload();
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Project-Nemesis
          </Typography>
          {!udetails && <Button color="inherit" href="/signup">Signup</Button>}
          {!udetails && <Button color="inherit" href="/login">Login</Button>}
          {udetails && <Button color="inherit" href="/login" onClick={Clear}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
