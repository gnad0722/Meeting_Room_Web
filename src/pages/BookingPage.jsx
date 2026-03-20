import React from "react";
import "../assets/styles/bookingPage.css"
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import ListRoom from "../components/ListRoom";
import { useLocation } from "react-router-dom";
import utils from "../utils/utils.js";
function BookingPage(){
    return(
        <div className="booking-page">
            <Header />
            <div className="body-booking-page">
                <BookingForm/>
                <ListRoom/>
            </div>
        </div>

    );
}
export default BookingPage;