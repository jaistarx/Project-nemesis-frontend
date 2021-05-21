import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormDialog from "../Popup/Popup";
import AlertDialogSlide from "../Alert/Alert";
import { AllUserDetails } from "../../functions/user";
import Animation from "../LoadAnimation/Animation";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  wid: {
    widht: 10,
  },
}))(TableRow);

const useStyles = makeStyles({
  mar:{
    marginTop:"60px",
  },
  table: {
    minWidth: 700,
  },
  button: {
    //   width:"10%",
    // marginleft:"-20%"
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [details, setDetails] = useState([]);
  const [load, setLoad] = useState(true);

  const handleShow = async () => {
    let result;
    try {
      setLoad(true);
      result = await AllUserDetails();
      setLoad(false);
      setDetails(result);
      console.log(details);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <div className={classes.mar}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Slno</StyledTableCell>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((row, n) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{n + 1}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.address}</StyledTableCell>
                <StyledTableCell align="right">
                  <FormDialog
                    name={row.name}
                    email={row.email}
                    address={row.address}
                    id={row._id}
                  ></FormDialog>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <AlertDialogSlide
                    name={row.name}
                    email={row.email}
                    address={row.address}
                    id={row._id}
                  ></AlertDialogSlide>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {load && (
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <Animation></Animation>
        </div>
      )}
    </div>
  );
}
