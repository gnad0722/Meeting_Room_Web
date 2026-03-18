import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
function MessageSuccess(props) {
  const id = props.id;
  const message = props.message;
  const title = props.title;
  return (
    <div class="modal fade" id={id} tabindex="-1">
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
              <span id="icon">
                <AiFillCheckCircle />
              </span>
              <span id="titleMessage">Your Room is Booked Successfully!</span>
              <span>
                Your <span id="message">{message.name}</span> booking for <span id="message">{message.date}</span> on <span id="message">{message.startTime}</span> to
                <span id="message">{message.endTime}</span> has been confirmed. Check your email for details.
              </span>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MessageSuccess;
