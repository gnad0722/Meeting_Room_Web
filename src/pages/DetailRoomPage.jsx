import React from "react";
import "../assets/styles/detailRoomPage.css";
import Header from "../components/Header";
import RoomCardDetail from "../components/RoomCardDetail";
function DetailRoomPage() {
  return (
    <div className="detail-page">
        <Header/>
      <div className="body-detail-page">
        <RoomCardDetail/>
      </div>
    </div>
  );
}
export default DetailRoomPage;
