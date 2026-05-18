import React from "react";
function StatsCard(props) {
  const color=props.color;
  return <div className="dashboardcard">
    <h2>{props.number}</h2>
    <p>{props.title}</p>
    <div className="card_icon" style={{color:color}} >
        <p>{props.icon}</p>
    </div>
    <div className="domixi" style={{backgroundColor:color}}>
    </div>
  </div>;
}
export default StatsCard;
