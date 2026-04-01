import React, { useState, useEffect } from "react";
import Amenities from "./Amenities";
import roomService from "../services/room.service.js";

function EditForm({ room, onClose,onUpdate }) {
  const [formData, setFormData] = useState({
    name: room?.roomname || "",
    location: room?.roomlocation || "",
    capacity: room?.roomcapacity || "",
    amenities: room?.roomamenities || ["Wifi"],
    formFile: room?.roomimage || "",
  });

  useEffect(() => {
    if (room) {
      setFormData({
        name: room.roomname || "",
        location: room.roomlocation || "",
        capacity: room.roomcapacity || "",
        amenities: room.roomamenities || ["Wifi"],
        formFile: room.roomimage || "",
      });
    }
  }, [room?.id]);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "formFile" ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    const { name, location, capacity, amenities, formFile } = formData;

    try {
      const data = await roomService.updateRoom(room.id, name, location, capacity, amenities, formFile);
      onClose();
      onUpdate();
    } catch (error) {
      console.error("Error updating room:", error.message);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog" style={{ maxWidth: "700px" }}>
        <div className="modal-content">
          <div className="modal-body">
            <div className="edit-form">
              <h4 className="text-center">Edit Meeting Room</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" id="name"
                    value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" id="location"
                    value={formData.location} onChange={handleChange} />
                </div>

                <Amenities
                  selected={formData.amenities}
                  onChange={(data) =>
                    setFormData((prev) => ({ ...prev, amenities: data }))
                  }
                />
                <div className="col-md-4">
                  <label className="form-label">Seat Capacity</label>
                  <input type="text" className="form-control" id="capacity"
                    value={formData.capacity} onChange={handleChange} />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Upload file</label>
                  <input className="form-control" type="file" id="formFile" onChange={handleChange} />
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;