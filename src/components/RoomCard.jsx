import React from "react";
import "../assets/styles/bookingPage.css";
import image from "../assets/images/meetingroom.jpg";
function RoomCard() {
  return (
    <div className="card-room">
      <img src={image} alt="Meeting Room" />
      <span id="roomName">Room Name</span>
      <span id="roomInfo">
        Seating Capacity: <span>8</span>
      </span>
      <span id="roomInfo">
        Location: <span>Building A, Floor 2</span>
      </span>
      <span id="roomInfo">
        Status: <span style={{ color: "green" }}>Available</span>
      </span>
      <span id="roomInfo">
        Facilities: <div className="list-facility"></div>
      </span>
        <div className="d-flex justify-content-between w-100">
          <button type="button" class="btn btn-outline-primary">
            View Calender
          </button>
          <button type="button" class="btn btn-primary">
            Book
          </button>
        </div>
    </div>
  );
}
export default RoomCard;
