import { TbWashDryP } from "react-icons/tb";
import notiApi from "../apis/noti.api.js";

const createNoti = async (user_id,content)=>{
    
    try{
        await notiApi.createNoti(user_id,content);
    }
    catch(Err){
        console.error(Err.message);
    }
}

const getNotifications = async (page=1,pageSize=20)=>{
    try{
        const listNoti=await notiApi.getNotifications(page,pageSize);
        return listNoti;
    }
    catch(Err){
        console.error(Err.message);
    }
}
const maskAsRead = async (notiId)=>{
    try{
        await notiApi.markAsRead(notiId);
    }
    catch(Err){
        console.error(Err.message);
    }
}
export default {createNoti,getNotifications,maskAsRead}