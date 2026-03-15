import React from "react";
import image from "../assets/images/meetingroom.jpg";
function RoomCardAdmin() {
  return (
    <div className="room-card">
      <div className="info">
        <div id="index">Room Name</div>
        <div id="content">BHAGIRATHI</div>
      </div>
      <div className="info">
        <div id="index">Upload Room Photo</div>
        <div id="content">
          <img src={image} alt="Meeting Room" />
        </div>
      </div>
      <div className="info">
        <div id="index">Location</div>
        <div id="content">UNIT-1B PNQ- HJ</div>
      </div>
      <div className="info">
        <div id="index">No of Seats</div>
        <div id="content">8</div>
      </div>
      <div className="info">
        <div id="index">Amenties</div>
        <div id="content">Audio, Video, HDMI, White Board, Sound System</div>
      </div>
      <div className="info">
        <div id="index">Bookings</div>
        <div id="content">7</div>
      </div>
      <div className="info">
         <div id="index"></div>
        <div id="content" className="gap-4">
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default RoomCardAdmin;
