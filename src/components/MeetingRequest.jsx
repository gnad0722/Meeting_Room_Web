import React, { useState, useEffect } from "react";
import { BsCalendarPlus } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
function MeetingRequest(props) {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const x = props.x;
  const y = props.y;
  const show = props.show;
  const startTime = props.time;
  useEffect(() => {
    if (!shouldOpenModal) return;

    const el = document.getElementById("bookingPop");
    if (el) {
      const modal = new bootstrap.Modal(el);
      modal.show();
    }

    setShouldOpenModal(false);
  }, [shouldOpenModal]);
  return (
    <div
      className="request-popup"
      style={{
        top: y,
        left: x,
        display: show ? "flex" : "none",
      }}
    >
      <div
        className="d-flex gap-3 align-items-center w-100"
        onClick={() => {
          props.onChose({
            show: false,
            time: null,
            x: 0,
            y: 0,
          });
          setShouldOpenModal(true);

        }}
      >
        <BsCalendarPlus />
        <span>New Meeting Request</span>
      </div>
      <div
        className="d-flex gap-3 align-items-center w-100"
        onClick={() => {
          props.onChose({
            show: false,
            time: null,
            x: 0,
            y: 0,
          });

          setShouldOpenModal(true);
        }}
      >
        <FiCalendar />
        <span>New All Day Event</span>
      </div>
     
    </div>
  );
}
export default MeetingRequest;
