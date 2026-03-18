import React from "react";
import logo from "../assets/images/logoweb.png";
function Header(props) {
  return (
    <div className="container header">
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center me-auto text-decoration-none"
        >
          <img src={logo} alt="logo" width="40" height="32" className="me-2" />

          <span className="fs-4">Room Meeting</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="../pages/AddRoomPage.jsx" className="nav-link">
              Meeting Rooms
            </a>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
