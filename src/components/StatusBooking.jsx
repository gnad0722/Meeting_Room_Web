import React, { useState } from "react";
function StatusBooking(props) {
  const status = props.status;
  const role = props.role;
  return (
    <div className="d-flex gap-4 align-items-center ">
      <i
        style={role === "admin" ? { cursor: "pointer" } : {}}
        className={`bi bi-calendar-check custom-icon ${
          status === "confirm" ? "confirm" : "pending"
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
          status === "cancel" ? "cancel" : "pending"
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
