// import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core"
// import { orange } from '@material-ui/core/colors';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';
// const useStyles = makeStyles({
//  stuListColor: {
//   backgroundColor: orange[400],
//   color: "white"
//  },
//  tableHeadCell: {
//   color: "white",
//   fontWeight: "bold",
//   fontSize: 16
//  },
// });
const View = () => {
//  const classes = useStyles();
 const { id } = useParams();
 const [student, setStudent] = useState([]);
 const history = useHistory();
 useEffect(() => {
  async function getStudent() {
   try {
    const student = await axios.get(`http://localhost:3333/students/${id}`)
    // console.log(student.data);
    setStudent(student.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getStudent();
 }, [id])

 function handleClick() {
  history.push("/")
 }

 

 const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

 return (
  <>
   {/* <DataTable
            columns={columns}
            data={data}
        /> */}
  </>
 )
}

export default View
