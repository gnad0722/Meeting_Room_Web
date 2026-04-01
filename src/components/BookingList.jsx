import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaClock,
  FaFilter,
  FaRegCheckSquare,
  FaRegTimesCircle,
} from "react-icons/fa";
import utils from "../utils/utils";
import StatusBooking from "./StatusBooking";
import StatusPopup from "./StatusPopup";
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
            <th>Book At</th>
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
              <td>{utils.formatDateTime(booking.book_at)}</td>
              <td>{booking.location}</td>
              <td>{booking.agenda}</td>
              {user.role === "admin" ? (
                <td>
                  <StatusBooking id={booking.id} status={booking.status} role={"admin"} />
                  <StatusPopup
                    id={booking.id}
                    message={{
                      name: booking.room_name,
                      date: booking.date,
                      startTime: booking.start_time,
                      endTime: booking.end_time,
                    }}
                    status={"confirm"}
                    title={"Confirm This Booking"}
                  />
                   <StatusPopup
                    id={booking.id}
                    message={{
                      name: booking.room_name,
                      date: booking.date,
                      startTime: booking.start_time,
                      endTime: booking.end_time,
                    }}
                    status={"cancel"}
                    title={"Cancel This Booking"}
                  />
                </td>
              ) : (
                <td>
                  <StatusBooking status={booking.status} id={booking.id} role={"customer"}/>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookingList;
