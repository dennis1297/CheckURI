import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import  React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Swal from 'sweetalert2'

function Resumelist() {


  const [data, setData] = useState([])
  const [file , setFile] = useState("")
  useEffect(()=>{
    getlist()
  },[])

  function getlist(){
    fetch("http://localhost:5000/files").then((result)=>{
      result.json().then((res)=>{
        // console.warn(res)
        setData(res.file)
      })
    })
   }

  async function Delete(name)    
{

  let result = await fetch("http://localhost:5000/a/deletes/"+name,{
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
  console.warn(data)
   return(
     <div className='employee_list'> 
      <h1>CV Details</h1>
      <table className="widget_table">
        <tr>
          <td>Name</td>
          <td>File</td>
        </tr>
        {
          data.map((item,index)=>
          <tr>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.url}</td>
          <div className="btn-group">
            <button className="btn btn-danger"onClick={()=>Delete(item.name)} >DELETE</button>
    
            </div>
        </tr>
        
          )
        } 
      </table>
     </div>
  )


 
}

export default Resumelist;
