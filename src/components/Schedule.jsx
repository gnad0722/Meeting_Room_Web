import React, { useState } from "react";
import ScheduleItem from "./ScheduleItem";
import MeetingRequest from "./MeetingRequest";
function Schedule(props) {
  const hours = Array.from({ length: 50 }, (_, i) => ({
    time: i * 0.5,
    available: true,
  }));
  const [popup, setPopup] = useState({
    show: false,
    x: 0,
    y: 0,
  });
  function handleClick(e) {
    setPopup({
      show: true,
      x: e.clientX,
      y: e.clientY,
    });
  }
  return (
    <div className="schedule">
      {popup.show && <MeetingRequest x={popup.x} y={popup.y} />}
      <div className="border-schedule"></div>
      {hours.map((hour, index) => {
        return (
          <ScheduleItem
            key={index}
            time={hour.time}
            available={hour.available}
            onRequest={handleClick}
          />
        );
      })}
    </div>
  );
}
export default Schedule;
