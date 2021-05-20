import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import FormDialog from "../Popup/Popup"
import AlertDialogSlide from "../Alert/Alert";
import {AllUserDetails} from "../../functions/user"
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  wid:{
      widht:10
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Froz', 159,55, 24, 4.0),
  createData('Ice cresajdnvkjanbsdvnbasjbdiviasjdvch', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  button:{
    //   width:"10%",
    // marginleft:"-20%"
  }
});

export default function CustomizedTables() {
  const classes = useStyles();
    const [token,setToken]=useState("")
    const [details,setDetails]=useState([])
    const [load, setLoad] = useState(true);

  const handleShow = async () => {
    let result;
    try {
        setLoad(true);
      result = await AllUserDetails();
      setLoad(false);
      setDetails(result);
    //   localStorage.setItem("AUTH", true);
    //   localStorage.setItem("User_details", JSON.stringify(result));
    //   props.history.push("/table");
    //   window.location.reload();
    console.log(details);
    } catch (err) {
      console.log(err);
    }
  };
//   let udetails = JSON.parse(localStorage.getItem("User_details"));
  
  useEffect(()=>{
    handleShow();
  },[])

  return (
      <div>
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
          {details.map((row,n) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{n+1}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="right" ><FormDialog name={row.name} email={row.email} address={row.address} id={row._id}></FormDialog></StyledTableCell>
              <StyledTableCell align="center"><AlertDialogSlide name={row.name} email={row.email} address={row.address} id={row._id}></AlertDialogSlide></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    <div style={{ textAlign: "center",marginTop:"10%" }}>
        {load && <Animation></Animation>}
      </div>
    </div>
  );
}
