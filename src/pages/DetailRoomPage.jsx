import React,{useState} from "react";
import "../assets/styles/detailRoomPage.css";
import Header from "../components/Header";
import RoomCardDetail from "../components/RoomCardDetail";
import ScheduleDetail from "../components/ScheduleDetail"
function DetailRoomPage() {
  const [selectedDate,setSelected]= useState(new Date());
  function handleSelect(selected){
    setSelected(selected);
  }
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
