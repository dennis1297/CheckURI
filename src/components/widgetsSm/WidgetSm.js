import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
function WidgetSm() {
  return (
    <div className='widgets_small'>
        <span className="widget_users">New Members</span>
        <ul className="widget_list">
            <li className="widget_item">
            <img src={require("../images/5.png")} alt="" className='widget_img' />
            <div className="widget_user">
                <span className="user_name">Sranav</span>
                <span className="user_title">Software Engineer</span>
            </div>
            <button className='widget_button'>
                <VisibilityIcon className='widget_icon'/>Display
            </button>
            </li>

            <li className="widget_item">
            <img src={require("../images/5.png")} alt="" className='widget_img' />
            <div className="widget_user">
                <span className="user_name">Sranav</span>
                <span className="user_title">Software Engineer</span>
            </div>
            <button className='widget_button'>
                <VisibilityIcon className='widget_icon'/>Display
            </button>
            </li>
            <li className="widget_item">
            <img src={require("../images/5.png")} alt="" className='widget_img' />
            <div className="widget_user">
                <span className="user_name">Sranav</span>
                <span className="user_title">Software Engineer</span>
            </div>
            <button className='widget_button'>
                <VisibilityIcon className='widget_icon'/>Display
            </button>
            </li>
            <li className="widget_item">
            <img src={require("../images/5.png")} alt="" className='widget_img' />
            <div className="widget_user">
                <span className="user_name">Sranav</span>
                <span className="user_title">Software Engineer</span>
            </div>
            <button className='widget_button'>
                <VisibilityIcon className='widget_icon'/>Display
            </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm