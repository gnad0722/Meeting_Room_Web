import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import bookingService from "../services/booking.service";
import notiService from "../services/noti.service";
function StatusPopup(props) {
  const id = props.id;
  const user_id = props.user_id;
  const title = props.title;
  const message = props.message;
  const status = props.status;
  async function handleAccept() {
    try {
      const success = await bookingService.acceptBooking(id);
      if (success) {
        await notiService.createNoti(
          user_id,
          `Your booking for ${message.name} on ${message.date} from ${message.startTime} to ${message.endTime} has been confirmed by the admin.`,
        );
        // window.location.reload();
      }
    } catch (Err) {
      console.error(Err);
    }
  }
  async function handleCancel() {
    try {
      const success = await bookingService.cancelBooking(id);
      if (success) {
         await notiService.createNoti(
          user_id,
          `Your booking for ${message.name} on ${message.date} from ${message.startTime} to ${message.endTime} has been cancelled by the admin.`,
        );
        window.location.reload();
      }
    } catch (Err) {
      console.error(Err);
    }
  }
  return (
    <div
      class="modal fade"
      id={status === "confirm" ? `confirm${id}` : `cancel${id}`}
      tabindex="-1"
    >
      <div class="modal-dialog" style={{ maxWidth: "700px" }}>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{title}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body">
            <div className="message-success">
              <span>
                Do you want to {status === "cancel" ? "cancel" : "confirm"} the
                booking for
                <span id="message"> {message.name}</span> on
                <span id="message"> {message.date}</span> from
                <span id="message"> {message.startTime}</span> to
                <span id="message"> {message.endTime}</span>?
              </span>
              <button
                type="button"
                class={
                  status === "cancel"
                    ? "btn btn-danger d-flex"
                    : "btn btn-success"
                }
                data-bs-dismiss="modal"
                onClick={status === "cancel" ? handleCancel : handleAccept}
              >
                {status === "cancel" ? "Cancel" : "Accept"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatusPopup;
