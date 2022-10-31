import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


function Topbar() {
return (
    <div className="topbar">
        <div className="topbarwrapper">
            <div className="topleft">
                <img src={require("../images/kk-logo-2.png")} alt="" className='top_nav_img'/>
            </div>
            <div className="topright">
                <div className="topbarIcon_container">
                    <NotificationsNoneIcon/>
                    <span className="top_icon_badge">2</span>
                
                </div>
                <div className="topbarIcon_container">
                    <LanguageIcon/>
                    <span className="top_icon_badge">2</span>
                
                </div>
                <div className="topbarIcon_container">
                    <SettingsIcon />
                                    
                </div>
                <img src={require("../images/5.png")} alt="" className='profile_pic'/>

            </div>
        </div>
    </div>
)
}

export default Topbar