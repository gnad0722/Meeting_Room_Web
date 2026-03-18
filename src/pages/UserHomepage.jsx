import React from "react";
import Header from "../components/Header.jsx";
import UserDashboard from './UserDashboard.jsx';
function UserHomepage(props) {
  return (
    <div className="user-homepage">
      <Header />
      <div>
        <UserDashboard />
      </div>
    </div>
  );
}
export default UserHomepage;
