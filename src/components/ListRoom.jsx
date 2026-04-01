import React, { useState, useEffect } from "react";
import "../assets/styles/bookingPage.css";
import roomService from "../services/room.service.js";
import SearchForm from "./SearchForm";
import RoomCard from "./RoomCard";
function createCard(room) {
  return (
    <RoomCard
      key={room.id}
      name={room.name}
      capacity={room.capacity}
      image={room.image}
      location = {room.location}
      amenities = {room.amenities}
    />
  );
}
function ListRoom() {
  const [rooms, setRooms] = useState([]);
  const fetchRooms = async () => {
    try {
      const data = await roomService.getAllRooms();
      setRooms(data.data);
    } catch (error) {
      console.log("Error fetching rooms:", error.message);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="booking-list">
      <div className="d-flex w-100 justify-content-between">
        <span id="title">Rooms Availibility</span>
        <SearchForm />
      </div>
      <div className="container-card">
        {rooms.map((room) => createCard(room))}
      </div>
    </div>
  );
}

export default ListRoom;
