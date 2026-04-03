import React, { useState, useEffect } from "react";
import "../assets/styles/bookingPage.css";
import roomService from "../services/room.service.js";
import SearchForm from "./SearchForm";
import RoomCard from "./RoomCard";
import "../assets/styles/pagination.css";
function createCard(room) {
  return (
    <RoomCard
      image={room.image}
      name={room.name}
      capacity={room.capacity}
      location={room.location}
      amenities={room.amenities}
      key={room.id}
    />
  );
}
function ListRoom({ rooms, pagination, onPageChange }) {
  const { page = 1, totalPages = 1 } = pagination || {};

  return (
    <div className="booking-list">
      <div className="d-flex w-100 justify-content-between">
        <span id="title">Rooms Availability</span>
        <SearchForm />
      </div>

      <div className="container-card">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            image={room.images}
            name={room.name}
            capacity={room.capacity}
            location={room.location}
            amenities={room.amenities}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                style={{
                  fontWeight: page === p ? "bold" : "normal",
                }}
              >
                {p}
              </button>
            );
          })}

          <button
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ListRoom;
