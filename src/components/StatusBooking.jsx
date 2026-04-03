import React, { useState } from "react";
function StatusBooking(props) {
  const status = props.status;
  const role = props.role;
  return (
    <div className="d-flex gap-4 align-items-center ">
      <i
        style={role === "admin" ? { cursor: "pointer" } : {}}
        className={`bi bi-calendar-check custom-icon ${
<<<<<<< HEAD
          status === "confirm" ? "confirm" : "pending"
=======
          status === "confirmed" ? "confirm" : "pending"
>>>>>>> 95150e0ecbb898ea1b9d7330fb232265f1cef9f3
        }`}
        {...(role === "admin" && status === "pending"
          ? {
              "data-bs-toggle": "modal",
              "data-bs-target": `#confirm${props.id}`,
            }
          : {})}
      />
      <i
          style={role === "admin" ? { cursor: "pointer" } : {}}
        className={`bi bi-calendar-x custom-icon ${
<<<<<<< HEAD
          status === "cancel" ? "cancel" : "pending"
=======
          status === "cancelled" ? "cancel" : "pending"
>>>>>>> 95150e0ecbb898ea1b9d7330fb232265f1cef9f3
        }`}
        {...(role === "admin" && status === "pending"
          ? {
              "data-bs-toggle": "modal",
              "data-bs-target": `#cancel${props.id}`,
            }
          : {})}
      />
    </div>
  );
}
export default StatusBooking;
