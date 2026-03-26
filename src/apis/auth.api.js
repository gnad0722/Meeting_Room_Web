import { axiosClient, API_BASE } from "./axiosClient.js";

const signup = async (username, email, password, phone, role) => {
  const response = await axiosClient.post("/auth/signup", {
    username,
    email,
    password,
    phone,
    role,
  });
  return response.data;
};

const login = async (email, password, rememberMe) => {
  const response = await axiosClient.post("/auth/login", {
    email,
    password,
    rememberMe,
  });
  return response.data;
};
const getProfile = async () => {
  const response = await axiosClient.get("/auth/profile");
  return response.data;
};
const logout = async () => {
  const response = await axiosClient.post("/auth/logout");
  return response.data;
};
const sendVerifyEmail = async (email) => {
  const response = await axiosClient.post("/auth/verify-email", {
    email,
  });
  return response.data;
};
const getEmailByToken = async (rawToken) => {
  const response = await axiosClient.get("/auth/reset-password",{
    params: { token: rawToken },
  });
  return response.data;
};
const resetPassword = async (email, newPassword) => {
  const response = await axiosClient.post("/auth/reset-password", {
    email,
    newPassword,
  });
  return response.data;
};
export default {
  signup,
  login,
  getProfile,
  logout,
  sendVerifyEmail,
  getEmailByToken,
  resetPassword,
};
