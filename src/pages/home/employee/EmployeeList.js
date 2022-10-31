import  React,{ useState, useEffect } from "react";
import "./EmployeeList.css";
import axios from "axios";
// import {Card,CardBody, CardHeader, Col, Row, Table, Toast} from 'reactstrap';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import { DeleteOutline } from "@mui/icons-material";

function EmployeeList() {

  const [data, setData] = useState([])
  useEffect(()=>{
    getlist()
  },[])
  console.warn(data)


async function Delete(_id)
{

  let result = await fetch("http://localhost:5000/delete/"+_id,{
    method:'DELETE'
  });
  result = await result.json();
  console.warn(result)
  getlist()
  Swal.fire({
    title: 'Data is Deleted',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })

}
   function getlist(){
    fetch("http://localhost:5000/get").then((result)=>{
      result.json().then((res)=>{
        // console.warn(res)
        setData(res.data)
        
        
      })
    })
   }


   return(
     <div className='employee_list' style ={{ marginTop: "70px" }}>
      <h3 className="fa fa-align-justify">Employee Details</h3>
      <table className="widget_table" >
       <thead>
        <tr>
        <th style={{ textAlign: "center" }}>ID</th>
          <th style={{ textAlign: "center" }}>Name</th>
          <th style={{ textAlign: "center" }}>Phone</th>
          <th style={{ textAlign: "center" }}>Email</th>
          <th style={{ textAlign: "center" }}>Work of Exprience</th>
          {/* <th style={{ textAlign: "center" }}>CV</th> */}
        </tr>
        </thead>
        <tbody>
        {
          data.map((item,index)=>
          <tr>
            <td>{index+1}</td>
          <td style={{ textAlign: "center" }}>{item.name}</td>
          <td style={{ textAlign: "center" }}>{item.phone}</td>
          <td style={{ textAlign: "center" }}>{item.email}</td>
          <td style={{ textAlign: "center" }}>{item.yearsofexperience}</td>
          {/* <td style={{ textAlign: "center" }}>{item.images}</td> */}
          <div className="btn-group">
            {/* <Link className= "btn btn-warning" to ={`/update/:id${item._id}`}>Edit</Link> */}
            {/* <button className="btn btn-danger" onClick={()=> Delete(item._id)}>Delete</button> */}
            <DeleteOutline style={{ color:"red" }} onClick={()=>Delete(item._id)}>Delete</DeleteOutline>
            
          </div>
        </tr>
        
          )
        } 
        </tbody>
      </table> 
     </div>
  )

}

export default EmployeeList;


// import React from 'react'
// import './EmployeeList.css'

// function EmployeeList() {
//   return (
//     <div className='employee_list'>Employee List
//     <table className="widget_table">
//         <tr className="widget_tr">
//           <th className="widget_th">Name</th>
//           <th className="widget_th">Phone Number</th>
//           <th className="widget_th">Email</th>
//           <th className="widget_th">Years of Experience</th>
//           <th className="widget_th"> Upload resume</th>
//         </tr>
//         <tr className="widget_tr">
//           <td className="widget__user">
         
//           <span className="widget__name">Sranav</span>
//           </td>
//           <td className="widget_date">1234567890</td>
//           <td className="widget_amount">sra@gmail.com</td>
//           <td className="widget_amount">2</td>
//           <td className="widget_amount"></td>
          
//         </tr>
//         <tr className="widget_tr">
//           <td className="widget__user">
         
//           <span className="widget__name">Sranav</span>
//           </td>
//           <td className="widget_date">1234567890</td>
//           <td className="widget_amount">sra@gmail.com</td>
//           <td className="widget_amount">2</td>
//           <td className="widget_amount"></td>
         
//         </tr>
//         <tr className="widget_tr">
//           <td className="widget__user">
         
//           <span className="widget__name">Sranav</span>
//           </td>
//           <td className="widget_date">1234567890</td>
//           <td className="widget_amount">sra@gmail.com</td>
//           <td className="widget_amount">2</td>
//           <td className="widget_amount"></td>
//         </tr>
//         <tr className="widget_tr">
//           <td className="widget__user">
          
//           <span className="widget__name">Sranav</span>
//           </td>
//           <td className="widget_date">1234567890</td>
//           <td className="widget_amount">sra@gmail.com</td>
//           <td className="widget_amount">2</td>
//           <td className="widget_amount"></td>
         
//         </tr>
//       </table>
//     </div>
    
//   )
// }

// export default EmployeeList