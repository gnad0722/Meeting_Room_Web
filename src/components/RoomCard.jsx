import React, { re } from "react";
import "../assets/styles/bookingPage.css";
import image from "../assets/images/meetingroom.jpg";
import { LuVideo, LuMic, LuPresentation, LuProjector } from "react-icons/lu";
import { MdSpeakerPhone, MdSettingsInputHdmi } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";
import MessageSuccess from "./MesageSuccess";
import { useNavigate } from "react-router-dom";

const AMENITY_ICONS = {
  "Audio":         { icon: <LuMic size={17} />,               label: "Audio" },
  "Video":         { icon: <LuVideo size={17} />,              label: "Video" },
  "White Board":   { icon: <PiChalkboardTeacher size={17} />,  label: "White Board" },
  "HDMI":          { icon: <MdSettingsInputHdmi size={17} />,  label: "HDMI" },
  "Projector":     { icon: <LuProjector size={17} />,          label: "Projector" },
  "Speaker Phone": { icon: <MdSpeakerPhone size={17} />,       label: "Speaker Phone" },
  "Wifi":          { icon: <FaWifi size={17} />,               label: "Wifi" },
};

const renderAmenityIcons = (amenities = []) => {
  return amenities.map((amenity) => {
    const match = AMENITY_ICONS[amenity];
    if (!match) return null;
    return (
      <span key={amenity} title={match.label} className="facility-icon">
        {match.icon}
      </span>
    );
  });
};

function RoomCard(props) {
  const navigate = useNavigate();
  const bookingData = props.bookingData;
  const id = props.id;
  const adminId=props.admin_id
  function handleChosenRoom(id) {
    if (bookingData.room_id && bookingData.room_id === id) {
      props.handleDataBooking({
        ...props.bookingData,
        room_id: null,
        room_name: "",
        admin_id:adminId
      });
    } else {
      props.handleDataBooking({
        ...props.bookingData,
        room_id: id,
        room_name: props.room_name || "Room Name",
        admin_id:adminId
      });
    }
  }
  return (
    <div className={"card " + (bookingData.room_id === id ? "card-chosen" : "")}>
      <img src={props.image} alt="Meeting Room" />
      <span id="roomName">
        {props.name && props.name.length > 16
          ? props.name.slice(0, 16) + "..."
          : props.name}
      </span>
      <span id="roomInfo">
        Seating Capacity: <span>{props.capacity}</span>
      </span>
      <span id="roomInfo">
        Location: <span>{props.location}</span>
      </span>
      <span id="roomInfo">
        Status: <span style={{ color: "green" }}>Available</span>
      </span>
      <span id="roomInfo">
        Facilities:
        <div className="list-facility">
          {renderAmenityIcons(props.amenities || [])}
        </div>
      </span>
      <div className="d-flex justify-content-between w-100">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => navigate(`/detail/${id}`)}
        >
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