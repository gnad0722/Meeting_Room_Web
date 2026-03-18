import React, { useState } from "react";
import Amenty from "./Amenty";
import RecurrenceForm from "./RecurrenceForm";
function BookingPopup() {
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
        <div className="modal fade" id="bookingPop" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog" style={{ maxWidth: "600px" }}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-popup">
              <div className="booking-popup">
                <div id="form">
                  <span>Location</span>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
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
                    className="form-control"
                    id="birthday"
                    name="birthday"
                  />
                </div>
                <div className="d-flex w-100 justify-content-between">
                  <div id="form" classNameName="col-5">
                    <span>Start Time</span>
                    <input
                      type="time"
                      className="form-control"
                      id="appt-time"
                      name="appt-time"
                      onChange={() => console.log("react")}
                      onInput={() => console.log("native")}
                    />
                  </div>
                  <div id="form" className="col-5">
                    <span>End Time</span>
                    <input
                      type="time"
                      className="form-control"
                      id="appt-time"
                      name="appt-time"
                    />
                  </div>
                </div>
                <div id="form">
                  <span>Number Seats</span>
                  <input
                    type="number"
                    className="form-control"
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
                    className="form-control"
                    id="bookingPurpose"
                    placeholder="Enter the purpose of the booking (Optional)"
                  ></input>
                </div>
                <div id="form">
                  <div className="form-check">
                    <input
                      className="form-check-input custom-check"
                      type="checkbox"
                      value=""
                      id="checkDefault"
                      onChange={(e) => {
                        setRecurrence(e.target.checked);
                      }}
                    />
                    <label
                      id="titleRecurrence"
                      className="form-check-label"
                      for="checkRecurrence"
                    >
                      Make Recurring
                    </label>
                  </div>
                  {recurrence && <RecurrenceForm />}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-4">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingPopup;
