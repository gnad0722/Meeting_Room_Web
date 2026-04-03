import React, { useState, useContext } from "react";
import "../assets/styles/bookingPage.css";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import ListRoom from "../components/ListRoom";
import utils from "../utils/utils.js";
import { AuthContext } from "../context/AuthContext.js";
function BookingPage() {
  const { user, loading } = useContext(AuthContext);
  if (user === null) return <div>Loading....</div>;
  const [bookingData, setBooking] = useState({
    user_id: user.id,
    email: user.email,
    room_name: "",
    room_id: null,
    book_date: "",
    start_time: "",
    end_time: "",
    agenda: "",
  });
  return (
    <div className="booking-page">
      <Header user={user} />
      <div className="body-booking-page">
        <BookingForm bookingData={bookingData} handleDataBooking={setBooking} />
        <ListRoom bookingData={bookingData} handleDataBooking={setBooking} />
       
      </div>
    </div>
  );
}
export default BookingPage;
