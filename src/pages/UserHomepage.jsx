import React from "react";
import Header from "../components/Header.jsx";
import UserDashboard from './UserDashboard.jsx';
import { useLocation } from "react-router-dom";
import utils from "../utils/utils.js";
function UserHomepage(props) {
  return (
    <div className="user-homepage">
      <Header/>
      <div>
        <UserDashboard />
      </div>
    </div>
  );
}
export default UserHomepage;
