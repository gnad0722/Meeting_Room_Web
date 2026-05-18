import React from "react";
function DeleteForm(props) {
  return (
    <div class="modal fade" id="deleteForm" tabindex="-1">
      <div class="modal-dialog" style={{ maxWidth: "600px" }}>
        <div class="modal-content">
          <div class="modal-body">
            <div className="delete-form">
              <span id="titleDelete">Reason to Delete Meeting Room</span>
              <div>
                <label for="reason">Reason</label>
                <input
                  type="text"
                  class="form-control"
                  id="reason"
                  placeholder="Enter your reason"
                ></input>
              </div>
              <div>
                <label for="reason">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center gap-3">
                <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteForm;
