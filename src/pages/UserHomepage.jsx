import React,{useState,useContext} from "react";
import Header from "../components/Header.jsx";
import UserDashboard from '../components/UserDashboard.jsx';
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import utils from "../utils/utils.js";
function UserHomepage(props) {
  const {user,loading}=useContext(AuthContext);
  if (user === null) return <div>Loading....</div>
  return (
    <div className="user-homepage">
      <Header user={user}/>
      <div>
        <UserDashboard />
      </div>
    </div>
  );
}
export default UserHomepage;
