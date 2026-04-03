import { axiosClient, API_BASE } from "./axiosClient.js";

const postBooking= async (user_id, room_id,room_name,email,book_date, start_time, end_time,  agenda)=>{
    const response= await axiosClient.post("/booking/",{
        user_id,
        room_id,
        room_name,
        email,
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
const acceptBooking = async (id)=>{
    const response = await axiosClient.put(`/booking/accept/${id}`);
    return response.data;
}
const cancelBooking = async (id)=>{
    const response = await axiosClient.put(`/booking/cancel/${id}`);
    return response.data;
}
const searchBooking = async (keyword,userId)=>{
    const response = await axiosClient.get(`/booking/search/${userId}?keyword=${keyword}`);
    return response.data;
}
export default {postBooking, getListBookingCustomer, getListBookingAdmin, acceptBooking,cancelBooking, searchBooking}