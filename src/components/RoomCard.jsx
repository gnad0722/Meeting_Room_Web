import React, { re } from "react";
import "../assets/styles/bookingPage.css";
import image from "../assets/images/meetingroom.jpg";
import { LuVideo, LuMic, LuPresentation, LuProjector } from "react-icons/lu";
import { MdSpeakerPhone, MdSettingsInputHdmi } from "react-icons/md";
import MessageSuccess from "./MesageSuccess";
import bookingService from "../services/booking.service";
function RoomCard(props) {
  const bookingData = props.bookingData;
  const id = props.id;
  function handleChosenRoom(id) {
    if (bookingData.room_id === id) {
      props.handleDataBooking({
        ...props.bookingData,
        room_id: null,
        room_name: ""
      });
    } else {
      props.handleDataBooking({
        ...props.bookingData,
        room_id: id,
        room_name: props.room_name || "Room Name" // Assuming you have room_name in your props
      });
    }
  }
  return (
    <div
      className={"card " + (bookingData.room_id === id ? "card-chosen" : "")}
    >
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
          onClick={() => handleChosenRoom(id)}
        >
          Choose
        </button>
      </div>
    </div>
  );
}
export default RoomCard;
