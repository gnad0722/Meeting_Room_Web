import { axiosClient, API_BASE } from "./axiosClient.js";
const createNoti = async (user_id,content)=>{
    const response = await axiosClient.post("/notifications/create",{
        user_id,
        content
    });
    return response.data;
}
export default {createNoti}