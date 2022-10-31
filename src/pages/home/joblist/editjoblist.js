import React, { useEffect, useState,} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom"
import Swal from 'sweetalert2'

 function Editjob(){


const [jobname, setJobname] = useState("")
const [jobdec, setJobdec] = useState("")
const [location, setlocation] = useState("")

let a;
const [msg,setMsg] = useState("")
const navigate = useNavigate();
const{id} = useParams();

useEffect(()=>{
    const edituserid = async()=>{
        fetch(`http://localhost:5000/a/gets/${id}`).then((result)=>{
            result.json().then((data)=>{
              console.warn(data)
              setJobname(data.data.jobname)
              setJobdec(data.data.jobdec)
              setlocation(data.data.location)

              
              
            })
          })
      
    }
    edituserid();
},[])



const handleUserUpdate= async (e)=>{
    e.preventDefault();
    const response = await axios.put(`http://localhost:5000/a/updates/${id}`,{jobname,jobdec,location})
    navigate("/joblist");
    
}


    return(
        <React.Fragment>
        <div className='employee_list'>
                <h2 className='text-center mb-4'>Edit Data</h2>
                <form onSubmit={handleUserUpdate} >
                    <div className='form-group'>
                        <input type= 'text' name="jobname"
                        className='form-control form-control-lg' placeholder="Job Name"  
                        value={jobname}  
                        onChange={(e)=>{setJobname(e.target.value)}}
                        />
                        <input type= 'text' 
                        className='form-control form-control-lg' placeholder="Job Description" name ='jobdec'
                        value={jobdec} 
                        onChange={(e)=>{setJobdec(e.target.value)}}
                        />
                        <input type= 'text'
                        className='form-control form-control-lg' placeholder="Location" name ='location'
                        value={location} 
                        onChange={(e)=>{setlocation(e.target.value)}}
                        />
                         </div>
                        <button className='btn btn-success'>Update Data</button>
                   
                </form>
            </div>
            </React.Fragment>
           
    )
}


export default Editjob;





// import React, { useEffect, useState,} from 'react'
// import axios from 'axios';
// import {useNavigate,useParams} from "react-router-dom"
// import Swal from 'sweetalert2'

//  function Editjob(){

// const [useredit, setUseredit]= useState({jobname:"", jobdec:"", location:""});
// const [msg,setMsg] = useState("")
// const navigate = useNavigate();
// const{_id} = useParams();

// useEffect(()=>{
//     const edituserid = async()=>{
//         fetch(`http://localhost:5000/a/gets/:id${_id}`).then((result)=>{
//             result.json().then((data)=>{
//               // console.warn(res)
//               setUseredit(data)
              
              
//             })
//           })
//         // const data = await fetch(`http://localhost:5000/a/gets/:id${_id}`);
//         // const res = await data.json();
//         // console.warn(data)
        
//     }
//     edituserid();
// },[])

// const handleEdit = (e)=>{
//     setUseredit({...useredit,[e.target.jobname]:e.target.value})

// }

// const handleUserUpdate= async (e)=>{
//     e.preventDefault();
//     const response = await axios.put(`http://localhost:5000/a/updates/:id${_id}`,useredit)
//     navigate("/joblist");
    
// }


//     return(
//         <React.Fragment>
//         <div className='employee_list'>
//                 <h2 className='text-center mb-4'>Edit Data</h2>
//                 <form onSubmit={handleUserUpdate} >
//                     <div className='form-group'>
//                         <input type= 'text' name="jobname"
//                         className='form-control form-control-lg' placeholder="Job Name"  
//                         value={useredit.jobname}  
//                         onChange = {(e)=>handleEdit(e)}
//                         />
//                         <input type= 'text' 
//                         className='form-control form-control-lg' placeholder="Job Description" name ='jobdec'
//                         value={useredit.jobdec} 
//                         onChange = {(e)=>handleEdit(e)}
//                         />
//                         <input type= 'text'
//                         className='form-control form-control-lg' placeholder="Location" name ='location'
//                         value={useredit.location} 
//                         onChange = {(e)=>handleEdit(e)} 
//                         />
//                          </div>
//                         <button className='btn btn-success'>Update Data</button>
                   
//                 </form>
//             </div>
//             </React.Fragment>
           
//     )
// }


// export default Editjob;



// //     let navigate = useNavigate();
// //     const {_id} = useParams();
// //     console.log(_id)
// //     const [user, setUser] = useState("")

// //     const [jobname, setJobname] = useState("")
// //     const [jobdec, setJobdec] = useState("")
// //     const [location, setLocation] = useState("")



// // // const [user,setUser]=useState({
// // //     jobname:"",
// // //     jobdec:"",
// // //     location:"",

// // // })
// // // const {  jobname,jobdec,location } = user;
// // const onInputChange = e =>{
// //     setUser({...user, [e.target.jobname]: e.target.value});
// // };



// // const onSubmit = async e =>{
// //     e.preventDefault();
// //     await axios.put(`http://localhost:5000/a/updates/:id${_id}`,user);
// //     navigate("/joblist");
// //     Swal.fire({
// //         title: 'Data is Deleted',
// //         showClass: {
// //           popup: 'animate__animated animate__fadeInDown'
// //         },
// //         hideClass: {
// //           popup: 'animate__animated animate__fadeOutUp'
// //         }
// //       })
    
// // }
// // const loadUser = async e =>{
// //     e.preventDefault();
// //    const result = await axios.get(`http://localhost:5000/a/gets/:id${_id}`)
// //     setUser(result.data);

      
// // }
// // useEffect(()=>{
// //     loadUser();
// // },[])