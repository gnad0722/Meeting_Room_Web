import React, { useState } from "react";
import "../assets/styles/bookingPage.css";
function RecurrenceForm() {
  const [recurrence, setRecurrence] = useState("Daily");
  console.log(recurrence);
  return (
    <div className="recurrence-form">
      <span id="title">Recurrence Pattern</span>
      <div className="recurrence-check">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="Daily"
            checked={recurrence === "Daily"}
            onChange={(e) => setRecurrence(e.target.value)}
          />
          <label class="form-check-label" for="exampleRadios1">
            Daily
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="Weekly"
             checked={recurrence === "Weekly"}
            onChange={(e) => setRecurrence(e.target.value)}
          />
          <label class="form-check-label" for="exampleRadios2">
            Weekly
          </label>
        </div>
      </div>
      <div className="recurrence-detail">
        {recurrence === "Daily" ? (
          <div id="recurrenceDaily">
            <span>Every:</span>
            <input type="number" class="form-control" id="numberSeats"></input>
            <span>days</span>
          </div>
        ) : (
          <div id="recurrenceWeekly">
            <span>Every:</span>
            <select class="form-select" aria-label="Default select example">
              <option selected>Date</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
export default RecurrenceForm;
