import React, { useEffect, useState, useContext } from "react";
import "../assets/styles/dashboard.css";
import StatsCard from "../components/StatsCard.jsx";
import BookingList from "../components/BookingList.jsx";
import {
  FaClock,
  FaFilter,
  FaRegCheckSquare,
  FaRegTimesCircle,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext.js";
import bookingService from "../services/booking.service.js";
let Statistics = [
  { number: 1, title: "Total Meeting Rooms", icon: <FaClock /> },
  { number: 2, title: "Recurring Booking", icon: <FaFilter /> },
  { number: 3, title: "Reschedule Bookings", icon: <FaRegTimesCircle /> },
  { number: 4, title: "Today's Bookings", icon: <FaRegCheckSquare /> },
];

function cardCreate(list, index) {
  return (
    <StatsCard
      number={list.number}
      title={list.title}
      icon={list.icon}
      key={index}
    />
  );
}
function UserDashboard() {
  const { user } = useContext(AuthContext);
  const [bookingList, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getBookingListCustomer(userId) {
    const listBooking = await bookingService.getListBookingCustomer(userId);
    setList(listBooking);
  }
  async function getBookingListAdmin(userId) {
    const listBooking = await bookingService.getListBookingAdmin(userId);
    setList(listBooking);
  }

  useEffect(() => {
    if (user.role==="customer")  getBookingListCustomer(user.id);
    else getBookingListAdmin(user.id)
   
    setLoading(false);
  }, []);
  if (loading) return <div>Loading....</div>;
  return (
    <div className="user-dashboard">
      <div className="flex-container">{Statistics.map(cardCreate)}</div>
      <div className="search-box">
        <h3>List of Bookings</h3>
        <form className="w-100 me-3" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            <FaFilter /> Filter
          </button>
        </form>
      </div>
      <hr />
      <div>
        <BookingList bookingList={bookingList} />
      </div>
    </div>
  );
}
export default UserDashboard;
