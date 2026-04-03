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
        <RoomCard id={13} bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
        <RoomCard id={14} bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
        <RoomCard id={15} bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
        <RoomCard id={16} bookingData={props.bookingData} handleDataBooking={props.handleDataBooking}/>
      </div>
    </div>
  );
}
export default ListRoom;
