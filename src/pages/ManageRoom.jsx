import React, { useContext, useState, useEffect } from "react";
import "../assets/styles/managePage.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import RoomCardAdmin from "../components/RoomCardAdmin";
import { AuthContext } from "../context/AuthContext";
import roomService from "../services/room.service.js";

function ManageRoom() {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const userId = user?.id ?? user?.userId;
  function createRoomCard(room) {
    return (
      <RoomCardAdmin
        roomname={room.name}
        roomlocation={room.location}
        roomcapacity={room.capacity}
        roomamenities={room.amenities}
        key={room.id}
        id={room.id}
        roomimage={room.image}
        onUpdate={fetchRooms}
      />
    );
  }

  const fetchRooms = async () => {
    try {
      const data = await roomService.getRoomsByAdId(userId);
      setRooms(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!userId) return;
    fetchRooms();
  }, [userId]);

  const handleSubmit = async (keyword) => {
    try {
      const data = await roomService.getRoomsByAdId(userId, keyword);
      setRooms(data.data);
    } catch (error) {
      console.log("Error searching rooms:", error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user</div>;

  return (
    <div className="manage-page">
      <Header />
      <div className="body-manage-page">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <span id="title">Meeting Rooms</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/add-room")}
          >
            + Add room
          </button>
        </div>
        <div className="d-flex w-100 justify-content-end align-items-center">
          <SearchForm onSubmit={handleSubmit} />
        </div>
        <div className="room-container">{rooms.map(createRoomCard)}</div>
      </div>
    </div>
  );
}
export default ManageRoom;
