import { axiosClient, API_BASE } from "./axiosClient.js";

const postBooking= async (user_id, room_id, book_date, start_time, end_time, book_at, agenda)=>{
    const response= await axiosClient.post("/booking/",{
        user_id,
        room_id,
        book_date,
        start_time,
        end_time,
        book_at,
        agenda
    });
    return response.data;
}
export default {postBooking}