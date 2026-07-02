import axios from "axios";
import { BASE_URL } from "../utils/constants";
import api from "../configs/api";

export const authService = {
  login: async (emailId, password) => {
    const response = await api.post(
      BASE_URL + "/login",
      { emailId, password },
      { withCredentials: true },
    );
    return response.data;
  },

  signup: async (firstName, lastName, emailId, password) => {
    const response = await api.post("/signup", {
      firstName,
      lastName,
      emailId,
      password,
    });
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get("/profile/view");
    return response.data;
  },

  sendOTP: async (emailId) => {
    const response = await api.post("/send/otp", { emailId });
    return response.data;
  },

  verifyOTP: async (otp, emailId) => {
    const response = await api.post("/verify/otp", {
      otp,
      emailId,
    });
    return response.data;
  },

  resetPassword: async (emailId, newPass, confirmPass) => {
    const response = await api.post("/reset/password", {
      emailId,
      newPass,
      confirmPass,
    });
    return response.data;
  },
};
