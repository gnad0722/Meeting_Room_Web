import React, { useState, useRef, useEffect } from "react";
import ScheduleItem from "./ScheduleItem";
function Schedule(props) {
  const selectedDate = props.selectedDate;
  const schedule = props.schedule;
  
  const componentRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const isSlotAvailable = (slotTime) => {
    if (!schedule || !selectedDate) return true;
    return !schedule.some(
      (booking) =>
        booking.date === selectedDate &&
        slotTime >= booking.start_time &&
        slotTime < booking.end_time
    );
  };

  const hours = Array.from({ length: 48 }, (_, i) => ({
    time: Math.ceil(i) * 0.5,
    available: isSlotAvailable(Math.ceil(i) * 0.5),
  }));
 
  return (
    <div className="schedule" ref={componentRef}>
      
      
      <div className="border-schedule"></div>
      {hours.map((hour, index) => {
        return (
          <ScheduleItem
            key={index}
            time={hour.time}
            available={hour.available}
          />
        );
      })}
    </div>
  );
}
export default Schedule;
