import bookingApi from "../apis/booking.api.js";

const postBooking = async (bookingData) => {
  const { user_id, room_id, book_date, start_time, end_time, agenda } =
    bookingData;
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await bookingApi.postBooking(
      user_id,
      room_id,
      book_date,
      start_time,
      end_time,
      agenda,
    );
    return response;
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 400) {
      const errors = Err.response.data.errors;
      errors.forEach((err) => {
        response.listErr.push({
          path: err.path,
          msg: err.msg,
        });
      });
    } else console.error(Err);
  }
  return response;
};

const getListBookingCustomer = async (userId) => {
  try {
    const listBooking= await bookingApi.getListBookingCustomer(userId);
    console.log(listBooking);
    return listBooking;
  } catch (Err) {
    if (Err.response.status===404) return [];
    else console.error(Err);
  }
};
const getListBookingAdmin = async (userId) => {
  console.log(userId);
  try {
    const listBooking= await bookingApi.getListBookingAdmin(userId);
    return listBooking;
  } catch (Err) {
    if (Err.response.status===404) return [];
    else console.error(Err);
  }
};
export default { postBooking, getListBookingCustomer,getListBookingAdmin };
