import axios from "axios";
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const List = () => {
 const [students, setStudents] = useState([]);
 
const history = useHistory();
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

const onTextFieldChange=(e)=>{
  console.log("Cell",e)
}

const handlePush=(id)=>{
  // window.location.href=`/edit/${id}`
  history.push(`/edit/${id}`);
}


 const columns: GridColDef[] = [
    { field: 'stuname', headerName: 'Name', width: 130,editable:true,},
    { field: 'email', headerName: 'Email', width: 200,editable:true,},
    
     { headerName: 'Edit', width: 130,renderCell:(row)=>(<div id="edit"><div onClick={()=>handlePush(row.id)}><EditIcon /></div></div>) },

    { field:'delete',headerName: 'Delete', width: 130,renderCell:(row)=>(<div id="delete" data-tag="allowRowEvents"><div onClick={()=>handleDelete(row.id)}><DeleteIcon/></div></div>) },

   
    
  ];

//   const onEvent: GridEventListener<GridEvents.cellEditStop> = (
//   params, // GridCellEditStopParams
//   event,  // MuiEvent<MuiBaseEvent>
//   details, // GridCallbackDetails
// ) => {

//   console.log("params",params.id);
//   console.log("events",event.target.defaultValue);
//   let field = params.field
//   let val = event.target.defaultValue
//   let data = {field:val}

// }    


 return (
  <>
   <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  </>
 )
}
export default List






