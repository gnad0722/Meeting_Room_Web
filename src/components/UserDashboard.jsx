import React, { useEffect, useState, useContext, useCallback } from "react";
import "../assets/styles/dashboard.css";
import StatsCard from "../components/StatsCard.jsx";
import BookingList from "../components/BookingList.jsx";
import {
  FaClock,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaRegTimesCircle,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext.js";
import bookingService from "../services/booking.service.js";
import utils from "../utils/utils.js";
import { socket } from "../services/socket.js";
import { GiConsoleController } from "react-icons/gi";
const Statistics = [
  {
    number: 0,
    title: "Total Meeting Rooms",
    icon: <FaClock />,
    color: "#111FA2",
  },
  {
    number: 0,
    title: "Confirm Booking",
    icon: <FaCheckCircle />,
    color: "#2F6B3F",
  },
  {
    number: 0,
    title: "Cancel Bookings",
    icon: <FaRegTimesCircle />,
    color: "#CE2626",
  },
  {
    number: 0,
    title: "Today's Bookings",
    icon: <FaCalendarAlt />,
    color: "#D97A2B",
  },
];

function cardCreate(list, index) {
  return (
    <StatsCard
      number={list.number}
      title={list.title}
      icon={list.icon}
      key={index}
      color={list.color}
    />
  );
}
function UserDashboard() {
  const { user } = useContext(AuthContext);
  const [bookingList, setList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  async function getBookingListCustomer(userId) {
    const listBooking = await bookingService.getListBookingCustomer(userId);
    utils.updateStatistics(Statistics, listBooking);
    setList(listBooking);
  }
  async function getBookingListAdmin(userId) {
    const listBooking = await bookingService.getListBookingAdmin(userId);
    utils.updateStatistics(Statistics, listBooking);
    setList(listBooking);
  }
  async function searchBookingList(e) {
    e.preventDefault();
    const listBooking = await bookingService.searchBooking(keyword, user.id);
    setList(listBooking);
  }

  const handelNewStatus = useCallback((data) => {
    const id = data.id;
    const newStatus = data.status;
    setList((prevList) => utils.updateStatusById(prevList, id, newStatus));
  }, []);
  const handleNewBookingForAdmin = useCallback(async () => {
    const listBooking = await bookingService.getListBookingAdmin(user.id);
    utils.updateStatistics(Statistics, listBooking);
    setList(listBooking);
    console.log("New booking received for admin dashboard");
  }, []);

  useEffect(() => {
    if (user.role === "customer") getBookingListCustomer(user.id);
    else {
      getBookingListAdmin(user.id);
      socket.on("newBooking", handleNewBookingForAdmin);
    }
    socket.on("newStatus", handelNewStatus);
    setLoading(false);
    return () => {
      socket.off("newStatus", handelNewStatus);
      socket.off("newBooking", handleNewBookingForAdmin);
    };
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
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
            type="submit"
            onClick={searchBookingList}
          >
            <FaSearch /> Search
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
