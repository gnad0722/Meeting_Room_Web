import React from 'react';
import Header from "../components/Header.jsx";
function AddRoomPage(props) {
  return (
    <div className="add-room-page">
      <Header />
      <h1>Meeting Rooms</h1>
      <form action="/add-room" method="POST">
        <div className="mb-3">
          <label htmlFor="roomName" className="form-label">
            Room Name
          </label>
          <input
            type="text"
            className="form-control"
            id="roomName"
            name="roomName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">
            Capacity
          </label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Room
        </button>
      </form>
    </div>
  );
}
export default AddRoomPage;