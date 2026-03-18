import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../assets/styles/addroompage.css";
import Amenities from "../components/Amenities.jsx";

function AddRoomPage(props) {
  const navigate = useNavigate();

  return (
    <div className="add-room-page">
      <Header />
      <h2>Meeting Rooms</h2>
      <div className="container add-room-form">
        <form action="/add-room" method="POST" className="row g-3">
          <div className="col-md-4">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="col-md-4">
            <label for="inputLocation" className="form-label">
              Location
            </label>
            <select id="inputLocation" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="inputSeatCapacity" className="form-label">
              Seat Capacity
            </label>
            <select id="inputSeatCapacity" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <Amenities />
          <div className="col-md-4">
            <label for="formFile" class="form-label">
              Upload file
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary ms-2"
              onClick={() => navigate("/")}
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
