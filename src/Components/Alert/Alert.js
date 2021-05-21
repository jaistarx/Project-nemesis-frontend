import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { DeleteUser } from "../../functions/user";
import SnackBar from "../SnackBar/SnackBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const [snack, setSnack] = useState(false);
  const [succerr, setSuccerr] = useState("");
  const [descri, setDescri] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { id } = props;
  const handleSubmit = async () => {
    let result;
    const data = {
      id,
    };
    try {
      handleClose();
      result = await DeleteUser(data);
      setSnack(true);
        setSuccerr("success");
        setDescri("Successfully deleted !");
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
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Are you sure you want to delete {props.name} ?
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Agree
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
