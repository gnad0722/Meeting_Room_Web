import React from "react";
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

  return (
    <div className="card">
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
          onClick={() => navigate("/detail", { state: { room: props } })}
        >
          View Calender
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            props.handleDataBooking({
              ...props.bookingData,
              room_id: props.id,
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