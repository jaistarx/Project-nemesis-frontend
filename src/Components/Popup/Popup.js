import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core/styles";
import { EditUser } from "../../functions/user";
import SnackBar from "../SnackBar/SnackBar";

const useStyles = makeStyles((theme) => ({
  cap: {
    textAlign: "center",
    border: "solid black 1px",
    borderRadius: "30px",
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setUsername] = useState("");
  const [address, setAddr] = useState("");
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");
  const { id } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    let result;
    const data = {
      name,
      address,
      id,
    };
    try {
      handleClose();
      result = await EditUser(data);
      setSnack(true);
        setSuccerr("success");
        setDescri("Successfully updated !");
      window.location.reload();
    } catch (err) {
      console.log(err);
      setSnack(true);
        setSuccerr("error");
        setDescri("Error !");
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">Edit</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <div>
              <span style={{ color: "black" }}>Username : </span>
              {props.name}
            </div>
            <div>
              <span style={{ color: "black" }}>Email : </span>
              {props.email}
            </div>
            <div>
              <span style={{ color: "black" }}>Address : </span>
              {props.address}
            </div>
          </DialogContentText>
          <div className={classes.cap}>EDIT</div>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label={props.email}
            type="email"
            fullWidth
            disabled
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="address"
            fullWidth
            onChange={(e) => setAddr(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
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
