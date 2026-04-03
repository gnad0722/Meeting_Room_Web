import React from "react";
import image from "../assets/images/meetingroom.jpg";
import { LuVideo, LuMic, LuPresentation, LuProjector } from "react-icons/lu";
import { MdSpeakerPhone, MdSettingsInputHdmi } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";
import Calendar from "./Calendar";

const AMENITY_ICONS = {
  "Audio":         { icon: <LuMic size={28} />,               label: "Audio" },
  "Video":         { icon: <LuVideo size={28} />,              label: "Video" },
  "White Board":   { icon: <PiChalkboardTeacher size={28} />,  label: "White Board" },
  "HDMI":          { icon: <MdSettingsInputHdmi size={28} />,  label: "HDMI" },
  "Projector":     { icon: <LuProjector size={28} />,          label: "Projector" },
  "Speaker Phone": { icon: <MdSpeakerPhone size={28} />,       label: "Speaker Phone" },
  "Wifi":          { icon: <FaWifi />,               label: "Wifi" },
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

function RoomCardDetail(props) {
  console.log("props:",props.room.amenities);
  if (!props.room) return <div>Loading...</div>;
  return (
    <div className="card-room">
      <img src={props.room.image} alt="Meeting Room" />
      <span id="roomName">{props.room.name}</span>
      <span id="roomInfo">
        Location: <span>{props.room.location}</span>
      </span>
      <span id="roomInfo">
        Status: <span style={{ color: "green" }}>Available</span>
      </span>
      <span id="roomInfo">
        Facilities:{" "}
        <div className="list-facility">
          {renderAmenityIcons(props.room.amenities)}
        </div>
      </span>
      <div className="d-flex w-100 justify-content-center mt-3">
        <Calendar selectedDate={props.selectedDate} onSelect={props.onSelect} />
      </div>
    </div>
  );
}

export default RoomCardDetail;