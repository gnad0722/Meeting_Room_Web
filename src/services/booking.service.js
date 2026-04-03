import bookingApi from "../apis/booking.api.js";

const postBooking = async (bookingData) => {
<<<<<<< HEAD
  const { user_id, room_id, book_date, start_time, end_time, agenda } =
=======
  const { user_id, room_id,room_name,email, book_date, start_time, end_time, agenda } =
>>>>>>> 95150e0ecbb898ea1b9d7330fb232265f1cef9f3
    bookingData;
  const response = {
    success: true,
    listErr: [],
  };
  try {
    const data = await bookingApi.postBooking(
      user_id,
      room_id,
<<<<<<< HEAD
=======
      room_name,
      email,
>>>>>>> 95150e0ecbb898ea1b9d7330fb232265f1cef9f3
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
    return listBooking;
  } catch (Err) {
    if (Err.response.status===404) return [];
    else console.error(Err);
  }
};
const getListBookingAdmin = async (userId) => {
  try {
    const listBooking= await bookingApi.getListBookingAdmin(userId);
    return listBooking;
  } catch (Err) {
    if (Err.response.status===404) return [];
    else console.error(Err);
  }
};
const acceptBooking = async (id) =>{
  try{
    await bookingApi.acceptBooking(id);
    return true;
  }
  catch(Err){
   return false;
  }
}
const cancelBooking = async (id)=>{
  try{
    await bookingApi.cancelBooking(id);
    return true;
  }
  catch(Err){
   return false;
  }
}
const searchBooking = async (keyword,userId)=>{
  try{
    const listBooking=await bookingApi.searchBooking(keyword,userId);
    return listBooking;
  }
  catch(Err){
    if (Err.response.status===404) return [];
    else console.error(Err);
  }
}
export default { postBooking, getListBookingCustomer,getListBookingAdmin, acceptBooking, cancelBooking, searchBooking };
