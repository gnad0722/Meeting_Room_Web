import React from "react";
import {BsCalendarPlus} from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
function MeetingRequest(props) {
  const x = props.x;
  const y = props.y;
  return (
    <div
      className="request-popup"
      style={{
        top: y,
        left: x,
      }}
    >
        <div className="d-flex gap-3 align-items-center w-100">
            <BsCalendarPlus/>
            <span>New Meeting Request</span>
        </div>
         <div className="d-flex gap-3 align-items-center w-100">
            <FiCalendar/>
            <span>New All Day Event</span>
        </div>
    </div>
  );
}
export default MeetingRequest;
