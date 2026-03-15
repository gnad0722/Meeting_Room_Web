import React from "react";
import "../assets/styles/bookingPage.css";
function Amenty(props) {
  const name = props.name;
  const chosen = props.chosen;
  return (
    <div
      className={"amenty" + (chosen ? " amenty-chosen" : "")}
      onClick={() => {
        props.onChosen(name);
      }}
    >
      {name}
    </div>
  );
}
export default Amenty;
