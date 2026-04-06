import React from "react";
import utils from "../utils/utils.js";
import Schedule from "./Schedule.jsx";
function ScheduleDetail(props) {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-CA");
  };
  const selectedDate = formatDate(props.selectedDate);
  const schedule = props.schedule;
  return (
    <div className="schedule-container">
      <span id="titleDate">
        {utils.formatDate(selectedDate)}{" "}
        <button type="button" class="btn btn-primary">
          Schedule
        </button>
      </span>
      <Schedule schedule={schedule} selectedDate={selectedDate} />
    </div>
  );
}
export default ScheduleDetail;
