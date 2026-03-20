import React from "react";
import "../assets/styles/managePage.css";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import RoomCardAdmin from "../components/RoomCardAdmin";
function ManageRoom() {
  return (
    <div className="manage-page">
      <Header />
      <div className="body-manage-page">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <span id="title">Meeting Rooms</span>
          <button type="button" class="btn btn-primary">
            + Add room
          </button>
        </div>
        <div className="d-flex w-100 justify-content-end align-items-center">
          <SearchForm />
        </div>
        <div className="room-container">
          <RoomCardAdmin />
          <RoomCardAdmin />
          <RoomCardAdmin />
          <RoomCardAdmin />
        </div>
      </div>
    </div>
  );
}
export default ManageRoom;
