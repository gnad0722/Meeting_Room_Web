import React from "react";
function LoadingModal({ show }) {
  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop show"></div>

      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-4">
            
            <div className="spinner-border text-primary mb-3"></div>

            <h5 className="fw-semibold">Processing your booking...</h5>
            <p className="text-muted mb-0">
              Please wait a moment
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingModal;