import React from "react";
import "../assets/styles/dashboard.css";
import StatsCard from "../components/StatsCard.jsx";
import BookingList from "../components/BookingList.jsx";
import { FaClock,FaFilter,FaRegCheckSquare, FaRegTimesCircle } from "react-icons/fa"; 

let Statistics = [
  { number: 1, title: "Total Meeting Rooms",icon: <FaClock /> },
  { number: 2, title: "Recurring Booking", icon: <FaFilter /> },
  { number: 3, title: "Reschedule Bookings", icon: <FaRegTimesCircle /> },
  { number: 4, title: "Today's Bookings", icon: <FaRegCheckSquare /> },
];

function cardCreate(list, index) {
    return <StatsCard number={list.number} title={list.title} icon={list.icon} key={index} />;
}
function UserDashboard() {
  return (
    <div className="user-dashboard">
      <div className="flex-container">
        {Statistics.map(cardCreate)}
      </div>
      <div className="search-box">
        <h3>List of Bookings</h3>
        <form className="w-100 me-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit"><FaFilter /> Filter</button>
        </form>
      </div>
      <hr/>
      <div className="booking-list">
        <BookingList />
      </div>
    </div>
  );
}
export default UserDashboard;
