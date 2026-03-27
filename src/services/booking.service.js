import bookingApi from "../apis/booking.api.js";

const postBooking = async (bookingData) => {
  const {
    user_id,
    room_id,
    book_date,
    start_time,
    end_time,
    book_at,
    agenda,
  } = bookingData;
  const response={
    success:true,
    listErr:[]
  }
  try {
    const data=await bookingApi.postBooking(user_id,room_id,book_date,start_time,end_time,book_at,agenda);
    return response
  } catch (Err) {
    response.success=false;
    console.log(Err.response);
  }
  return response;
};
export default {postBooking};
