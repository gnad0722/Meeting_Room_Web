import authApi from "../apis/auth.api.js";
import { createContext, useState, useEffect } from "react";
const signup = async (userInfo) => {
  const username = userInfo.username;
  const email = userInfo.email;
  const password = userInfo.password;
  const phone = userInfo.phone;
  const role = userInfo.role;
  const response = {
    success: true,
    listErr: [],
    data: null,
  };
  try {
    const data = await authApi.signup(username, email, password, phone, role);
    response.data = data;
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
    } else if (Err.response.status === 409) {
      const error = Err.response.data.message;
      response.listErr.push({
        path: "username",
        msg: error,
      });
    } else console.error(Err);
  }
  return response;
};
const login = async (userInfo, rememberMe) => {
  const email = userInfo.email;
  const password = userInfo.password;
  const response = {
    success: true,
    listErr: [],
    data: null,
  };
  try {
    const data = await authApi.login(email, password, rememberMe);
    response.data = data;
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
    } else if (Err.response.status === 401) {
      const error = Err.response.data.errors;
      console.log(Err.response);
      response.listErr.push({
        path: "auth",
        msg: "Invalid Credential",
      });
    } else console.error(Err);
  }
  return response;
};

const logout = async () => {
  try {
    const data = await authApi.logout();
  } catch (Err) {
    console.error(Err);
  }
};
const sendVerifyEmail = async (email) => {
  const response = {
    success: true,
    listErr: [],
  };
  try {
    await authApi.sendVerifyEmail(email);
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 401) {
      const error = Err.response.data.errors;
      console.log(Err.response);
      response.listErr.push({
        path: "email",
        msg: "Email is invalid",
      });
    } else console.error(Err);
  }

  return response;
};
const getEmailByToken = async (rawToken) => {
  const response = {
    success: true,
    email: "",
  };
  try {
    const data = await authApi.getEmailByToken(rawToken);
    response.email = data.email;
  } catch (Err) {
    response.success = false;
    if (Err.response.status === 401) {
      response.email = "";
    } else console.error(Err);
  }
  return response;
};
const resetPassword = async (email, newPassword) => {
  const response = {
    success: true,
    listErr: [],
  };
  try {
    await authApi.resetPassword(email, newPassword);
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
export default { signup, login, logout, sendVerifyEmail, getEmailByToken,resetPassword };
