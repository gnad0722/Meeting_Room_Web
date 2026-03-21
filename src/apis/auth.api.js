import { axiosClient, API_BASE } from "./axiosClient.js";

const signup = async (username, email, password, phone,role) => {
  const response = await axiosClient.post("/auth/signup", {
    username,
    email,
    password,
    phone,
    role
  });
  return response.data;
};

const login =async (email,password)=>{
  console.log(email,password);
  const response= await axiosClient.post("/auth/login",{
    email,
    password
  })
  return response.data;
}
export default {signup, login};