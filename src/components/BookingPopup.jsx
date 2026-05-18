import React, { useState, useContext, useEffect } from "react";
import bookingService from "../services/booking.service";
import MessageSuccess from "./MesageSuccess";
import LoadingModal from "./LoadingModal";
import notiService from "../services/noti.service";
import MessageError from "./MessageError";
import { AuthContext } from "../context/AuthContext.js";
function BookingPopup(props) {
  const { user } = useContext(AuthContext);
  const [successData, setSuccessData] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const room = props.room;
  const [bookingData, setBooking] = useState({
    user_id: user.id,
    admin_id: room.admin_id,
    email: user.email,
    room_name: room.name,
    room_id: room.id,
    book_date: "",
    start_time: "",
    end_time: "",
    agenda: "",
  });
  const [mess, setMess] = useState({
    book_date: "",
    start_time: "",
    end_time: "",
  });
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
  return (
    <div
      className="modal fade"
      id="bookingPop"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: "600px" }}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-popup">
              <div className="booking-popup">
                <div id="form">
                  <span>Date</span>
                  <input
                    type="date"
                    class="form-control"
                    id="birthday"
                    name="birthday"
                    onChange={(e) =>
                      setBooking({
                        ...bookingData,
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
                        setBooking({
                          ...bookingData,
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
                        setBooking({
                          ...bookingData,
                          end_time: e.target.value,
                        })
                      }
                    />
                    <span id="error-msg">{mess.end_time}</span>
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
                      setBooking({
                        ...bookingData,
                        agenda: e.target.value,
                      })
                    }
                  ></input>
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
                onClick={handleBooking}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <LoadingModal show={loading} />
      <MessageSuccess
        show={showSuccess}
        successData={successData}
        onClose={() => setShowSuccess(false)}
      />
      <MessageError
        show={showError}
        errorData={errorData}
        onClose={() => setShowError(false)}
      />
    </div>
  );
}
export default BookingPopup;
