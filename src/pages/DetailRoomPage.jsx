import React, { useState, useContext } from "react";
import "../assets/styles/detailRoomPage.css";
import Header from "../components/Header";
import RoomCardDetail from "../components/RoomCardDetail";
import ScheduleDetail from "../components/ScheduleDetail";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import roomService from "../services/room.service.js";

function DetailRoomPage() {
  const [selectedDate, setSelected] = useState(new Date());
  const [room, setRoom] = useState(null);
  const [roomLoading, setRoomLoading] = useState(true);

  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  
  function handleSelect(selected) {
    setSelected(selected);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setRoomLoading(true);
        const data = await roomService.getRoomByRoomId(id);
        setRoom(data.data[0]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setRoomLoading(false);
      }
    };
    fetchData();
  }, [id]);
  if (loading || roomLoading) return <div>Loading....</div>;

  return (
    <div className="detail-page">
      <Header />
      <div className="body-detail-page">
        <RoomCardDetail selectedDate={selectedDate} onSelect={handleSelect} room={room} />
        <ScheduleDetail selectedDate={selectedDate} schedule={room?.schedule} />
      </div>
    </div>
  );
}

export default DetailRoomPage;