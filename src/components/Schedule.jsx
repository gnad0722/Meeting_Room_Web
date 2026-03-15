import React from "react";
import ScheduleItem from "./ScheduleItem";
function Schedule(props) {
  const hours = Array.from({ length: 50 }, (_, i) => ({
    time: i * 0.5,
    available: true,
  }));
  return (
    <div className="schedule">
      <div className="border-schedule">
      </div>
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
