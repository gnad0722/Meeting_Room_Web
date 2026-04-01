import React, { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../assets/styles/addroompage.css";
import roomService from "../services/room.service.js";
import Amenities from "../components/Amenities.jsx";
import { AuthContext } from "../context/AuthContext.js";

function AddRoomPage() {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    amenities: ["Wifi"],
    imgFile: "",
  });

  const handleAmenitiesChange = useCallback((data) => {
    setFormData((prev) => ({ ...prev, amenities: data }));
  }, []);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "imgFile" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit data:", formData);
    const { name, location, capacity, amenities, imgFile } = formData;
    try {
      const response = await roomService.createRoom(name, location, capacity, user.id, amenities, imgFile);
      console.log("Room created:", response);
    } catch (error) {
      console.log("Error submitting form:", error.message);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user</div>;

  return (
    <div className="add-room-page">
      <Header user={user} />
      <h2>Meeting Rooms</h2>

      <div className="container add-room-form">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="capacity" className="form-label">
              Seat Capacity
            </label>
            <input
              type="text"
              className="form-control"
              id="capacity"
              value={formData.capacity}
              onChange={handleChange}
            />
          </div>

          <Amenities
            selected={formData.amenities}
            onChange={handleAmenitiesChange}
          />

          <div className="col-md-4">
            <label htmlFor="imgFile" className="form-label">
              Upload file
            </label>
            <input
              className="form-control"
              type="file"
              id="imgFile"
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary ms-2"
              onClick={() => navigate("/admin/room")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRoomPage;
