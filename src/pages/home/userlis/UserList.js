import React, { useState } from "react";
import "./UserList.css";
import Swal from "sweetalert2";
import axios from "axios";
// import { useForm } from "react-hook-form";

function UserList() {

  const [jobname, setJobName] = useState("");
  const [jobdec, setJobDec] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState();
  let formData=new FormData
  const headers = {
    "Content-type": "multipart/form-data",
    
  }

  const onFileChange =(e)=>{
    console.log(e.target.files[0])
    formData.append('images',e.target.files[0])
    if(e.traget && e.traget.files[0]){
    }
  

  }
  const submitData=(e)=>{
    e.preventDefault();
    formData.append("jobname", jobname);
    formData.append("jobdec", jobdec);
    formData.append("location", location);
    formData.append("images",images)
    console.log(formData)
    console.log("form data",formData.get("images"))
    axios({
      method: "post",
      url: "http://localhost:5000/a/adds",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(res=>{console.log(res)})
    .catch(error=>{console.log(error)})

    Swal.fire({
          title: 'Data is Added',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }


  return (
    <div className="user_list">
      <h3 className="top__heading">User Job Creation</h3>
      <form action="" className="Job_creation">
        <label className="form_labels">Job Name</label>
        <input
          value={jobname}
          onChange={(e) => {
            setJobName(e.target.value);
          }}
          name="Job Name"
          type="text"
          placeholder="Job Name"
          required
        />
        <label className="form_labels">Job Description</label>
        <textarea
          value={jobdec}
          onChange={(e) => {
            setJobDec(e.target.value);
          }}
          name="Job Description "
          id=""
          cols="30"
          rows="10"
          placeholder="Job Description"
        ></textarea>
        <label className="form_labels">Location</label>
        <input
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          name="Location"
          type="text"
          placeholder="Location"
        />
        <label className="form_labels">File</label>
        <input
          value={images}
          onChange={onFileChange}
          name="images"
          type="file"
          placeholder="Location"
        />
        <button type="button" onClick={submitData} className="update_button">
          Update
        </button>
      </form>
    </div>
    // )
  );
}

export default UserList;




  // const loadImage = (event) => {
  //   // const image = e.target.files[0];
  //   setFile(event.target.files[0]);
  //   console.log(event.target.files[0]);
  //   alert("data is added");
  // };

  // const saveUser = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);
    
  //   formData.append("jobname", jobname);
  //   formData.append("jobdec", jobdec);
  //   formData.append("location", location);
  //   try {
  //     await axios.post("http://localhost:5000/a/adds", formData, {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "multipart/form-data",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // function saveUser ()
  // {
  //   console.warn({jobname,jobdec,location,file})
  //   let data = {jobname,jobdec,location,file}
  //   fetch("http://localhost:5000/a/adds",{
  //     method: 'POST',
  //     headers:{
  //       'Accept':'application/json',
  //       'content-Type':'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   })
  //   Swal.fire({
  //     title: 'Data is Added',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     }
  //   })
  // }