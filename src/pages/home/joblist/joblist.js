import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import  React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Swal from 'sweetalert2'

function Joblist() {


  const [data, setData] = useState([])
  useEffect(()=>{
    getlist()
  },[])
  // useEffect(()=>{
  //   fetch("http://localhost:5000/a/gets").then((result)=>{
  //     result.json().then((res)=>{
  //       // console.warn(res)
  //       setData(res.data)
  //       Toast.success(res.data)
  //       res.seend("Data Add successfully")
  //     })
  //   })
  // },[])
  function getlist(){
    fetch("http://localhost:5000/a/gets").then((result)=>{
      result.json().then((res)=>{
        // console.warn(res)
        setData(res.data)
        
        
      })
    })
   }

  async function Delete(_id)    
{

  let result = await fetch("http://localhost:5000/a/deletes/"+_id,{
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
//   alert("Data is Deleted")
  

}
  console.warn(data)
   return(
     <div className='employee_list'> 
      <h1>JOB Details</h1>
      <table className="widget_table">
        <tr>
          <td>ID</td>
          <td>JobName</td>
          <td>Job Description</td>
          <td>Location</td>
          {/* <td>File</td> */}
        </tr>
        {
          data.map((item,index)=>
          <tr>
          <td>{index+1}</td>
          <td>{item.jobname}</td>
          <td>{item.jobdec}</td>
          <td>{item.location}</td>
          {/* <td>{item.images}</td> */}
          <div className="btn-group">

          <Link to={`/updates/${item._id}`}> <Button variant="info" size="lg"> EDIT </Button></Link>
            {/* <button className="btn btn-danger"> <Link className="btn btn-primery "to = {`/updates/${item._id}`}>EDIT</Link></button> */}
            {/* <DeleteOutline style={{ color:"red" }} onClick={()=>Delete(item._id)}>Delete</DeleteOutline> */}
            <button className="btn btn-danger"onClick={()=>Delete(item._id)} >DELETE</button>
    
            </div>
        </tr>
        
          )
        } 
      </table>
     </div>
  )


 
}

export default Joblist;
