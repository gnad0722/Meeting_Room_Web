import React, { useState, useContext, useEffect } from "react";
import "../assets/styles/bookingPage.css";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import roomService from "../services/room.service.js";
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

  const [query, setQuery] = useState({
    keyword: "",
    capacity: null,
    amenities: [],
    date: null,
    startTime: null,
    endTime: null,
    page: 1,
    limit: 9,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (user) {
      setBooking((prev) => ({
        ...prev,
        user_id: user.id,
      }));
    }
  }, [user]);

  const fetchRoom = async () => {
    try {
      const data = await roomService.getAllRooms(query);
      setRooms(data.data || []);
      
      setPagination(data.pagination);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchRoom();
  }, [user, query]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user</div>;

  return (
    <div className="booking-page">
      <Header user={user} />

      <div className="body-booking-page">
        <BookingForm
          bookingData={bookingData}
          handleDataBooking={setBooking}
          query={query}
          setQuery={setQuery}
        />

        <ListRoom
          rooms={rooms}
          pagination={pagination}
          onPageChange={(newPage) =>
            setQuery((prev) => ({ ...prev, page: newPage }))
          }
          query={query}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
}

export default BookingPage;
