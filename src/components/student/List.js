import axios from "axios";
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { useState, useEffect } from "react";

const List = () => {
 const [students, setStudents] = useState([]);

 useEffect(() => {
  async function getAllStudent() {
   try {
    const students = await axios.get("http://localhost:3333/students")
    // console.log(students.data);
    setStudents(students.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllStudent();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3333/students/${id}`);
  var newstudent = students.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setStudents(newstudent);
 }
 const columns: GridColDef[] = [
    { field: 'stuname', headerName: 'First name', width: 130 },
    { field: 'email', headerName: 'Last name', width: 130 },
  ];

 return (
  <>
   <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  </>
 )
}
export default List






