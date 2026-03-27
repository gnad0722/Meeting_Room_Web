import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaClock,
  FaFilter,
  FaRegCheckSquare,
  FaRegTimesCircle,
} from "react-icons/fa";
function BookingList(props) {
  const { user } = useContext(AuthContext);
  const bookingList = props.bookingList;
  return (
    <div className="container-fluid mt-4 px-5 booking-table">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Booking Date & Time</th>
            <th>Location</th>
            <th>Agenda</th>
            <th>{user.role === "admin" ? "Action" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.room_name}</td>
              <td>{booking.date}</td>
              <td>{booking.start_time}</td>
              <td>{booking.end_time}</td>
              <td>{booking.booking_datetime}</td>
              <td>{booking.location}</td>
              <td>{booking.agenda}</td>
              {user.role === "admin" ? (
                <td>
                  {booking.actionApprove}
                  {booking.actionDelete}
                </td>
              ) : (
                <td>{booking.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookingList;
