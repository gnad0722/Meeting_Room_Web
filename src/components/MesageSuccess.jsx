import { useEffect } from "react";

function MessageSuccess({ show, onClose, successData }) {
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
              <h5 className="modal-title">Booking Successful</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body text-center">
              <div className="message-success">
                <div className="fs-1 text-success mb-2">✔</div>

                <h5 className="fw-bold">Your Room is Booked Successfully!</h5>

                {successData && (
                  <p className="mt-3">
                    Your <b>{successData.room_name}</b> booking for{" "}
                    <b>{successData.book_date}</b> from{" "}
                    <b>{successData.start_time}</b> to{" "}
                    <b>{successData.end_time}</b> has been sent to the room
                    owner. Please check your email for confirmation details.
                  </p>
                )}

                <button className="btn btn-primary mt-3" onClick={onClose}>
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

export default MessageSuccess;
