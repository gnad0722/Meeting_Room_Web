import React,{useState, useContext} from "react";
import "../assets/styles/detailRoomPage.css";
import Header from "../components/Header";
import RoomCardDetail from "../components/RoomCardDetail";
import ScheduleDetail from "../components/ScheduleDetail"
import { AuthContext } from "../context/AuthContext";
function DetailRoomPage() {
  const [selectedDate,setSelected]= useState(new Date());
  function handleSelect(selected){
    setSelected(selected);
  }
  const {user,loading}=useContext(AuthContext);
  if (user === null) return <div>Loading....</div>
  return (
    <div className="detail-page">
        <Header/>
      <div className="body-detail-page">
        <RoomCardDetail selectedDate={selectedDate} onSelect={handleSelect}/>
        <ScheduleDetail selectedDate={selectedDate}/>
      </div>
    </div>
  );
}
export default DetailRoomPage;
