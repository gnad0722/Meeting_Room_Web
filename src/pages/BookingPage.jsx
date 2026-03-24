import React, { useState, useContext } from "react";
import "../assets/styles/bookingPage.css";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import ListRoom from "../components/ListRoom";
import { useLocation } from "react-router-dom";
import utils from "../utils/utils.js";
import { AuthContext } from "../context/AuthContext.js";
function BookingPage() {
  const { user, loading } = useContext(AuthContext);
  if (user === null) return <div>Loading....</div>
  return (
    <div className="booking-page">
      <Header user={user} />
      <div className="body-booking-page">
        <BookingForm />
        <ListRoom />
      </div>
    </div>
  );
}
export default BookingPage;
