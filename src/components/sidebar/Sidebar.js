import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';
import WorkIcon from '@mui/icons-material/Work';
import ListIcon from '@mui/icons-material/List';




function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_wrapper">
            <div className="sidebar_menu">
                <h3 className="sidebar_title">Dashboard</h3>
                <ul className="sidebar_list">
                    {/* <li className="sidebar_list_item active">
                        <LineStyleIcon className='sidebar-icon'/><Link to="/">
                        Home</Link>
                    </li> */}
                    {/* <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Anlytics
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Sales
                    </li> */}
                    <li className="sidebar_list_item  active ">
                        <CreateIcon className='sidebar-icon'/><Link to="users">
                        Create Job</Link>
                    </li>
                    <li className="sidebar_list_item ">
                        <WorkIcon className='sidebar-icon'/><Link to="joblist">
                        Job List</Link>
                    </li>
                    <li className="sidebar_list_item ">
                        <ListIcon className='sidebar-icon'/><Link to="employee">
                        Employee Details</Link>
                    </li>
                    <li className="sidebar_list_item ">
                        <ListIcon className='sidebar-icon'/><Link to="resume">
                        Resume List</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="sidebar_menu">
                <h3 className="sidebar_title">Quick Menu</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item ">
                        <LineStyleIcon className='sidebar-icon'/><Link to="users">
                        User</Link>
                    </li>
                    <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Products
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Transaction
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Reports
                    </li>
                </ul>
            </div> */}
            {/* <div className="sidebar_menu">
                <h3 className="sidebar_title">Notification</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item ">
                        <LineStyleIcon className='sidebar-icon'/>
                        Mail
                    </li>
                    <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Feedback
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Messages
                    </li>
                </ul>
            </div> */}
            {/* <div className="sidebar_menu">
                <h3 className="sidebar_title">Staff</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item ">
                        <LineStyleIcon className='sidebar-icon'/>
                        Manage
                    </li>
                    <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Anlytics
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Report
                    </li>
                </ul>
            </div> */}
            
        </div>
    </div>
  )
}

export default Sidebar