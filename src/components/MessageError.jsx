import { useEffect } from "react";

function MessageError({ show, onClose, errorData }) {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <>
      {/* backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      {/* modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog" style={{ maxWidth: "700px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Booking Failed</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body text-center">
              <div className="message-success">
                <i
                  class="bi bi-x-circle-fill"
                  style={{ fontSize: "3rem", color: "red" }}
                ></i>

                <h5 className="fw-bold">Your Room is Booked Failded!</h5>

                {errorData ? (
                  <p className="mt-3">
                    The room <b>{errorData.room_name}</b> is already booked on{" "}
                    <b>{errorData.book_date}</b> from{" "}
                    <b>{errorData.start_time}</b> to <b>{errorData.end_time}</b>
                    .
                  </p>
                ) : (
                  <p>Please Choose A Room</p>
                )}

                <button className="btn btn-primary" onClick={onClose}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageError;
