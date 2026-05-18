import { axiosClient, API_BASE } from "./axiosClient.js";
const createNoti = async (user_id,content)=>{
    console.log(user_id,content);
    const response = await axiosClient.post("/notifications/create",{
        user_id,
        content
    });
    return response.data;
}
const getNotifications= async (page,pageSize)=>{
    const response= await axiosClient.get(`/notifications?page=${page}&pageSize=${pageSize}`);
    return response.data;
}
const markAsRead = async (notiId) => {
    const response = await axiosClient.put(`/notifications/mark-read/${notiId}`);
    return response.data;
};
export default {createNoti,getNotifications,markAsRead}