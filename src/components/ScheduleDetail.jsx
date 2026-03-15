import React from "react";
import utils from "../utils/utils.js"
import Schedule from "./Schedule.jsx";
function ScheduleDetail(props) {
  const selectedDate=props.selectedDate;
  return <div className="schedule-container">
        <span id="titleDate">{utils.formatDate(selectedDate)}</span>
        <Schedule/>
  </div>;
}
export default ScheduleDetail;
