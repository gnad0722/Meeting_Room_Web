import React, { useState, useEffect } from "react";
import utils from "../utils/utils.js";
import Schedule from "./Schedule.jsx";
function ScheduleDetail(props) {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const formatDate = (date) => {
    return date.toLocaleDateString("en-CA");
  };
  const selectedDate = formatDate(props.selectedDate);
  const schedule = props.schedule;
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
    <div className="schedule-container">
      <span id="titleDate">
        {utils.formatDate(selectedDate)}
        <button type="button" class="btn btn-primary" onClick={()=>setShouldOpenModal(true)}>
          Schedule
        </button>
      </span>
      <Schedule schedule={schedule} selectedDate={selectedDate} />
    </div>
  );
}
export default ScheduleDetail;
