import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cap:{
        textAlign:"center",
        border:"solid black 1px",
        borderRadius:"30px",
        fontSize:"20px",
        // boxShadow:"2px 2px grey",
        backgroundColor:"black",
        color:"white"
    },
}));


export default function FormDialog(props) {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Edit</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <div><span style={{color:"black"}}>Username : </span>{props.name}</div>
            <div><span style={{color:"black"}}>Email : </span>{props.name}</div>
            <div><span style={{color:"black"}}>Address : </span>{props.name}</div>
            <div><span style={{color:"black"}}>Password : </span>{props.name}</div>
          </DialogContentText>
          <div className={classes.cap}>EDIT</div>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
          />
           <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="address"
            fullWidth
          />
           <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
