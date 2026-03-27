import React from "react";
import "../assets/styles/bookingPage.css";
import SearchForm from "./SearchForm";
import RoomCard from "./RoomCard";
function ListRoom(props) {
  return (
    <div className="booking-list">
      <div className="d-flex w-100 justify-content-between">
        <span id="title">Rooms Availibility</span>
        <SearchForm />
      </div>
      <div className="container-card">
        <RoomCard bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
        <RoomCard bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
        <RoomCard bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
        <RoomCard bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
      </div>
    </div>
  );
}
export default ListRoom;
