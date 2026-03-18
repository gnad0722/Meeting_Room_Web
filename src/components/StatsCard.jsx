import React from "react";
function StatsCard(props) {
  return <div className="dashboardcard">
    <h2>{props.number}</h2>
    <p>{props.title}</p>
    <div className="card_icon">
        <p>{props.icon}</p>
    </div>
    <div className="domixi">
    </div>
  </div>;
}
export default StatsCard;
