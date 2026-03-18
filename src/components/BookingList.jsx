import React from "react";
import {
  FaClock,
  FaFilter,
  FaRegCheckSquare,
  FaRegTimesCircle,
} from "react-icons/fa";
function BookingList(props) {
  let bookingsList = [
    {
      id: 1,
      roomName: "BHAGIRATHI",
      startDate: "24/11/2021",
      endDate: "24/11/2021",
      startTime: "11:30 AM",
      endTime: "12:30 AM",
      bookingDateTime: "21/11/2021, 11:30 AM",
      members: 3,
      location: "UNIT-1 PNQ-HJ",
      agenda: "Development Strategy",
      actionApprove: <FaRegCheckSquare />,
      actionDelete: <FaRegTimesCircle />,
    },
    {
      id: 2,
      roomName: "GHATAPRABHA",
      startDate: "24/11/2021",
      endDate: "24/11/2021",
      startTime: "11:00 AM",
      endTime: "11:30 AM",
      bookingDateTime: "21/11/2021, 11:30 AM",
      members: 4,
      location: "UNIT-1 PNQ-HJ",
      agenda: "Development Strategy",
      actionApprove: <FaRegCheckSquare />,
      actionDelete: <FaRegTimesCircle />,
    },
    {
      id: 3,
      roomName: "BHIMA",
      startDate: "24/11/2021",
      endDate: "24/11/2021",
      startTime: "10:30 AM",
      endTime: "11:00 AM",
      bookingDateTime: "21/11/2021, 11:30 AM",
      members: 5,
      location: "UNIT-1 PNQ-HJ",
      agenda: "Development Strategy",
      actionApprove: <FaRegCheckSquare />,
      actionDelete: <FaRegTimesCircle />,
    },
    {
      id: 4,
      roomName: "TUNGBHADRA",
      startDate: "24/11/2021",
      endDate: "24/11/2021",
      startTime: "10:00 AM",
      endTime: "09:30 AM",
      bookingDateTime: "21/11/2021, 11:30 AM",
      members: 6,
      location: "UNIT-1B PNQ-HJ",
      agenda: "Product Meeting",
      actionApprove: <FaRegCheckSquare />,
      actionDelete: <FaRegTimesCircle />,
    },
    {
      id: 5,
      roomName: "BRAMHAPUTRA",
      startDate: "24/11/2021",
      endDate: "24/11/2021",
      startTime: "09:30 AM",
      endTime: "09:00 AM",
      bookingDateTime: "21/11/2021, 11:30 AM",
      members: 3,
      location: "UNIT-1B PNQ-HJ",
      agenda: "Development Strategy",
      actionApprove: <FaRegCheckSquare />,
      actionDelete: <FaRegTimesCircle />,
    },
  ];
  return (
    <div className="container-fluid mt-4 px-5 booking-table">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Booking Date & Time</th>
            <th>Members</th>
            <th>Location</th>
            <th>Agenda</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookingsList.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.roomName}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.startTime}</td>
              <td>{booking.endTime}</td>
              <td>{booking.bookingDateTime}</td>
              <td>{booking.members}</td>
              <td>{booking.location}</td>
              <td>{booking.agenda}</td>
              <td>
                {booking.actionApprove}{" "}
                {booking.actionDelete}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookingList;
