import React, { useState } from "react";
import image from "../assets/images/meetingroom.jpg";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm.jsx";

function RoomCardAdmin(props) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <div className="room-card">
        <div className="info">
          <div id="index">Room Name</div>
          <div id="content">{props.roomname}</div>
        </div>
        <div className="info">
          <div id="index">Upload Room Photo</div>
          <div id="content">
            <img src={props.roomimage} alt="Meeting Room" style={{objectFit: "cover"}}/>
          </div>
        </div>
        <div className="info">
          <div id="index">Location</div>
          <div id="content">{props.roomlocation}</div>
        </div>
        <div className="info">
          <div id="index">No of Seats</div>
          <div id="content">{props.roomcapacity}</div>
        </div>
        <div className="info">
          <div id="index">Amenities</div>
          <div id="content">{props.roomamenities?.join(", ")}</div>
        </div>
        <div className="info">
          <div id="index"></div>
          <div id="content" className="gap-4">
            <button className="btn btn-warning" onClick={() => setShowEdit(true)}>
              Edit
            </button>

            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteForm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <DeleteForm roomId={props.roomid}/>

      {showEdit && (
        <EditForm room={props} onClose={() => setShowEdit(false)} onUpdate={props.onUpdate} />
      )}
    </>
  );
}

export default RoomCardAdmin;