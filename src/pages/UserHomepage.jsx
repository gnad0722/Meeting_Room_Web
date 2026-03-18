import React from "react";
import Header from "../components/Header.jsx";
import Dashboard from './UserDashboard.jsx';
function UserHomepage(props) {
  return (
    <div className="user-homepage">
      <Header />
      {/* <div>
        <button className="btn btn-primary px-5 ms-5" type="button">
          Dashboard
        </button>
        <button className="btn btn-light px-5" type="button">
          My Bookings
        </button>
      </div> */}
      <div>
        <Dashboard />
      </div>
    </div>
  );
}
export default UserHomepage;
