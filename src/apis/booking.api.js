import { axiosClient, API_BASE } from "./axiosClient.js";

const postBooking= async (user_id, room_id, book_date, start_time, end_time,  agenda)=>{
    const response= await axiosClient.post("/booking/",{
        user_id,
        room_id,
        book_date,
        start_time,
        end_time,
        agenda
    });
    return response.data;
}
const getListBookingCustomer = async (userId)=>{
    const response= await axiosClient.get(`/booking/${userId}`);
    return response.data;
}
const getListBookingAdmin = async (userId)=>{
    const response= await axiosClient.get(`/booking/admin/${userId}`);
    return response.data;
}
export default {postBooking, getListBookingCustomer, getListBookingAdmin}