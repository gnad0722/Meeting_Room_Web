import React, { useState, useLayoutEffect } from "react";
import "../assets/styles/bookingPage.css";
import Amenty from "./Amenty";
import RecurrenceForm from "./RecurrenceForm";
import bookingService from "../services/booking.service";
import MessageSuccess from "./MesageSuccess";
import LoadingModal from "./LoadingModal";
function BookingForm(props) {
  const bookingData = props.bookingData;
  const [successData, setSuccessData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mess, setMess] = useState({
    book_date: "",
    start_time: "",
    end_time: "",
  });
  const [listAmenties, setList] = useState([
    "Video",
    "Audio",
    "Whiteboard",
    "HDMI",
    "Projector",
    "Speaker Phone",
    "Wifi"
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
  async function handleBooking(e) {
    e.preventDefault();
    setLoading(true);
    const response = await bookingService.postBooking(bookingData);
    if (response.success) {
      setLoading(false);
      setSuccessData(bookingData);
      setShowSuccess(true);
    } else {
      setLoading(false);
      const errors = {};
      response.listErr.forEach((err) => {
        errors[err.path] = err.msg;
      });
      setMess(errors);
    }
  }
  return (
    <div className="form-container">
      <span id="title">Book A Meeting Room</span>
      <div className="booking-form">
        <div id="form">
          <span>Date</span>
          <input
            type="date"
            class="form-control"
            id="birthday"
            name="birthday"
            onChange={(e) =>
              props.handleDataBooking({
                ...props.bookingData,
                book_date: e.target.value,
              })
            }
          />
          <span id="error-msg">{mess.book_date}</span>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <div id="form" className="col-5">
            <span>Start Time</span>

            <input
              type="time"
              class="form-control"
              id="appt-time"
              name="appt-time"
              onChange={(e) =>
                props.handleDataBooking({
                  ...props.bookingData,
                  start_time: e.target.value,
                })
              }
            />
            <span id="error-msg">{mess.start_time}</span>
          </div>
          <div id="form" className="col-5">
            <span>End Time</span>
            <input
              type="time"
              class="form-control"
              id="appt-time"
              name="appt-time"
              onChange={(e) =>
                props.handleDataBooking({
                  ...props.bookingData,
                  end_time: e.target.value,
                })
              }
            />
            <span id="error-msg">{mess.end_time}</span>
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
            onChange={(e) =>
              props.handleDataBooking({
                ...bookingData,
                agenda: e.target.value,
              })
            }
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
          <button
            type="button"
            class="btn btn-outline-primary me-auto"
            onClick={() => window.location.reload()}
          >
            Reset
          </button>
          <button type="button" class="btn btn-outline-primary">
            Search
          </button>
          <button type="button" class="btn btn-primary" onClick={handleBooking}>
            Book
          </button>
        </div>
      </div>
      <LoadingModal show={loading} />
      <MessageSuccess
        show={showSuccess}
        successData={successData}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}
export default BookingForm;
