import React from "react";
import image from "../assets/images/meetingroom.jpg";
import { LuVideo, LuMic, LuPresentation, LuProjector } from "react-icons/lu";
import { MdSpeakerPhone, MdSettingsInputHdmi } from "react-icons/md";
import Calendar from "./Calendar";
function RoomCardDetail() {
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
        Facilities:{" "}
        <div className="list-facility">
          <LuVideo />
          <LuMic />
          <LuPresentation />
          <MdSettingsInputHdmi />
          <MdSpeakerPhone />
          <LuProjector />
        </div>
      </span>
      <div className="d-flex w-100 justify-content-center mt-3">
          <Calendar/>
      </div>
      
    </div>
  );
}
export default RoomCardDetail;
