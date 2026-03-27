import React, { re } from "react";
import "../assets/styles/bookingPage.css";
import image from "../assets/images/meetingroom.jpg";
import { LuVideo, LuMic, LuPresentation, LuProjector } from "react-icons/lu";
import { MdSpeakerPhone, MdSettingsInputHdmi } from "react-icons/md";
import MessageSuccess from "./MesageSuccess";
import bookingService from "../services/booking.service";
function RoomCard(props) {
  const bookingData = props.bookingData;
  return (
    <div className="card">
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
        Facilities:
        <div className="list-facility">
          <LuVideo />
          <LuMic />
          <LuPresentation />
          <MdSettingsInputHdmi />
          <MdSpeakerPhone />
          <LuProjector />
        </div>
      </span>
      <div className="d-flex justify-content-between w-100">
        <button type="button" class="btn btn-outline-primary">
          View Calender
        </button>
        <button
          type="button"
          class="btn btn-primary"
          
          onClick={() =>
            props.handleDataBooking({
              ...props.bookingData,
              room_id:  9,
            })
          }
        >
          Choose
        </button>
      </div>
      <MessageSuccess
        id="success"
        title="Message"
        message={{
          name: " Bhagirathi Room",
          date: "30 Nov 2021",
          startTime: "11:00 AM",
          endTime: "12:00 AM",
        }}
      />
    </div>
  );
}
export default RoomCard;
