import '../../../src/styles/LeftSIdeBarOrganismStyles/leftSIdebar.css'
import logo_icon from '../../assets/logo_icon.png'
import logo from '../../assets/logo.png'
import React from 'react';

const LeftSideBar = () => {
    return (
        <div className="header">
        <div className="side-nav">
          <a href="#" className="logo">
            <img  src={logo} className="logo-img" />
            <img src={logo_icon} className="logo-icon" />
          </a>
          <ul className="nav-links">
            <li><a href="#"><i className="fa-solid fa-house-user" /><p>Dashboard</p></a></li>
            <li><a href="#"><i className="fa-solid fa-comment-dots" /><p>Message</p></a></li>
            <li><a href="#"><i className="fa-solid fa-user-group" /><p>Users</p></a></li>
            <li><a href="#"><i className="fa-solid fa-box-open" /><p>Rewards</p></a></li>
            <li><a href="#"><i className="fa-solid fa-chart-simple" /><p>Reports</p></a></li>
            <li><a href="#"><i className="fa-solid fa-gears" /><p>Settings</p></a></li>
            <div className="active" />
          </ul>
        </div>
      </div>
    );



}
export default LeftSideBar