import React, { useState } from "react";
import "../assets/styles/bookingPage.css";
import Amenty from "./Amenty";
import RecurrenceForm from "./RecurrenceForm";

function BookingForm() {
  const [listAmenties, setList] = useState([
    "Video",
    "Audio",
    "Whiteboard",
    "HDMI",
    "Projector",
    "Speaker Phone",
  ]);
  const [listChosen, setChosen] = useState([]);
  const [recurrence, setRecurrence] = useState(false);
  function handelChosen(amenty) {
    setChosen((prev) => {
      if (prev.includes(amenty)) {
        return prev.filter((item) => item !== amenty);
      } else {
        return [...prev, amenty];
      }
    });
  }
  return (
    <div className="form-container">
      <span id="title">Book A Meeting Room</span>
      <div className="booking-form">
        <div id="form">
          <span>Location</span>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose your location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div id="form">
          <span>Date</span>
          <input
            type="date"
            class="form-control"
            id="birthday"
            name="birthday"
          />
        </div>
        <div className="d-flex w-100 justify-content-between">
          <div id="form" className="col-5">
            <span>Start Time</span>
            <input
              type="time"
              class="form-control"
              id="appt-time"
              name="appt-time"
            />
          </div>
          <div id="form" className="col-5">
            <span>End Time</span>
            <input
              type="time"
              class="form-control"
              id="appt-time"
              name="appt-time"
            />
          </div>
        </div>
        <div id="form">
          <span>Number Seats</span>
          <input
            type="number"
            class="form-control"
            id="numberSeats"
            placeholder="Enter number seates"
          ></input>
        </div>
        <div id="form">
          <span>Amenities</span>
          <div className="d-flex flex-wrap justify-content-start gap-4">
            {listAmenties.map((amenty, index) => {
              return (
                <Amenty
                  name={amenty}
                  key={index}
                  chosen={listChosen.includes(amenty)}
                  onChosen={handelChosen}
                />
              );
            })}
          </div>
        </div>
        <div id="form">
          <span>Purpose of the booking</span>
          <input
            type="text"
            class="form-control"
            id="bookingPurpose"
            placeholder="Enter the purpose of the booking (Optional)"
          ></input>
        </div>
        <div id="form">
          <div class="form-check">
            <input
              class="form-check-input custom-check"
              type="checkbox"
              value=""
              id="checkDefault"
              onChange={(e) => setRecurrence(e.target.checked)}
            />
            <label
              id="titleRecurrence"
              class="form-check-label"
              for="checkRecurrence"
            >
              Make Recurring
            </label>
          </div>
          {recurrence && <RecurrenceForm />}
        </div>
        <div className="d-flex justify-content-end w-100">
          <button type="button" class="btn btn-outline-primary">
            Reset
          </button>
          <button type="button" class="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    
    </div>
  );
}
export default BookingForm;
