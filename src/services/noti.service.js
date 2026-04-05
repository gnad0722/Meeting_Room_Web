import notiApi from "../apis/noti.api.js";

const createNoti = async (user_id,content)=>{
    console.log(user_id,content);
    
    try{
        await notiApi.createNoti(user_id,content);
    }
    catch(Err){
        console.error(Err.message);
    }
}
export default {createNoti}