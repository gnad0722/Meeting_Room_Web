import React, { useState, useLayoutEffect } from "react";
import "../assets/styles/bookingPage.css";
import Amenty from "./Amenty";
import RecurrenceForm from "./RecurrenceForm";
import bookingService from "../services/booking.service";
import MessageSuccess from "./MesageSuccess";
import LoadingModal from "./LoadingModal";
import notiService from "../services/noti.service";
import MessageError from "./MessageError";
function BookingForm(props) {
  const bookingData = props.bookingData;
  const [successData, setSuccessData] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [capacity, setCapacity] = useState(null);
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
    "Wifi",
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
      await notiService.createNoti(
        bookingData.admin_id,
        `You have a new booking for ${bookingData.room_name} on ${bookingData.book_date} from ${bookingData.start_time} to ${bookingData.end_time}. Please check and confirm or cancel the booking in time.`,
      );
    } else {
      if (bookingData.room_id === null) {
        setLoading(false);
        setShowError(true);
        return;
      } else if (response.status === 409) {
        setLoading(false);
        setErrorData(bookingData);
        setShowError(true);
      } else {
        setLoading(false);
        const errors = {};
        response.listErr.forEach((err) => {
          errors[err.path] = err.msg;
        });
        setMess(errors);
      }
    }
  }
  const handleFormBooking = (e) => {
    e.preventDefault();
    const data = {
      ...props.query,
      page: 1,
      capacity: capacity,
      date: bookingData.book_date,
      startTime: bookingData.start_time,
      endTime: bookingData.end_time,
      amenities: listChosen,
    };
    console.log(data);
    props.setQuery(data);
    setMess({
      book_date: "",
      start_time: "",
      end_time: "",
    });
  };
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
            value={capacity || ""}
            onChange={(e) => setCapacity(e.target.value)}
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
        {/* <div id="form">
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
        </div> */}
        <div className="d-flex justify-content-end w-100">
          <button
            type="button"
            class="btn btn-outline-primary me-auto"
            onClick={() => window.location.reload()}
          >
            Reset
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={handleFormBooking}
          >
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
        onClose={() => navigate("/home")}
      />
      <MessageError
        show={showError}
        errorData={errorData}
        onClose={() => setShowError(false)}
      />
    </div>
  );
}
export default BookingForm;
