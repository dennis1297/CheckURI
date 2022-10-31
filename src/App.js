import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import UserList from "./pages/home/userlis/UserList";
import EmployeeList from "./pages/home/employee/EmployeeList";
import Joblist from "./pages/home/joblist/joblist";
import Editjob from "./pages/home/joblist/editjoblist";
import Resumelist from "./pages/home/resume/ResumeList";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}>
          
          </Route>
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList/>}>
          
          </Route>
          {/* <Routes> */}
          <Route path="/employee" element={<EmployeeList/>}>
          
          </Route>
          <Route path="/joblist" element={<Joblist/>}>
          
          </Route>
          <Route path="/updates/:id" element={<Editjob/>}>
          </Route>
          <Route path="/resume" element={<Resumelist/>}>
          </Route>
          
          {/* <Route path="/sign-in" element={<Login/>}>
          </Route>
          
          <Route path="/sign-up" element={<SignUp/>}>
          </Route> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
