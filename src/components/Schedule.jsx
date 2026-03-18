import React, { useState, useRef, useEffect } from "react";
import ScheduleItem from "./ScheduleItem";
import MeetingRequest from "./MeetingRequest";
import BookingPopup from "./BookingPopup";
function Schedule(props) {
  const componentRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const hours = Array.from({ length: 50 }, (_, i) => ({
    time: i * 0.5,
    available: true,
  }));
  const [popup, setPopup] = useState({
    show: false,
    x: 0,
    y: 0,
    time: null,
  });
  function handleClick(e, startTime) {
    const newX = e.pageX - coords.x;
    const newY = e.pageY - coords.y;
    if (
      (newX == popup.x && newY == popup.y) ||
      (popup.time !== null && popup.time === startTime)
    ) {
      setPopup({
        show: false,
        x: 0,
        y: 0,
        time: null,
      });
      return;
    }
    setPopup({
      show: true,
      x: e.pageX - coords.x,
      y: e.pageY - coords.y,
      time: startTime,
    });
  }
  useEffect(() => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setCoords({
        x: rect.left,
        y: rect.top,
      });
    }
  }, []);
  return (
    <div className="schedule" ref={componentRef}>
      <MeetingRequest
        show={popup.show}
        x={popup.x}
        y={popup.y}
        time={popup.startTime}
        onChose={setPopup}
      />
     <BookingPopup />
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
