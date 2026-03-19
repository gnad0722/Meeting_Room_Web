import React from "react";
import logo from "../assets/images/logoweb.png";
import { MdLogout } from "react-icons/md";
import { FaUserCircle, FaBell } from "react-icons/fa";

import "../assets/styles/header.css";
function Header(props) {
  const avatar = props.avatar || null;
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <span>Roomify</span>
        </div>
        <div className="header-feature">
          <div className="pages">
            <div className="page-item "> Dashboard </div>
             <div className="page-item choosed"> Meeting Room </div>
          </div>
          <div className="notification">
            <FaBell style={{ cursor: "pointer" }} />
          </div>
          <div className="profile">
            {avatar ? (
              <img className="avatar" src={avatar} />
            ) : (
              <FaUserCircle className="avatar" />
            )}
            <span>John Doe</span>
            <MdLogout style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
