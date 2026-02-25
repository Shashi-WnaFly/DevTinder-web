import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const authService = {
  login: async (emailId, password) => {
    const response = await axios.post(
      BASE_URL + "/login",
      { emailId, password },
      { withCredentials: true }
    );
    return response.data;
  },

  signup: async (firstName, lastName, emailId, password) => {
    const response = await axios.post(
      BASE_URL + "/signup",
      { firstName, lastName, emailId, password },
      { withCredentials: true }
    );
    return response.data;
  },

  logout: async () => {
    const response = await axios.post(
      BASE_URL + "/logout",
      {},
      { withCredentials: true }
    );
    return response.data;
  },

  getProfile: async () => {
    const response = await axios.get(BASE_URL + "/profile/view", {
      withCredentials: true,
    });
    return response.data;
  },

  sendOTP: async (emailId) => {
    const response = await axios.post(BASE_URL + "/send/otp", { emailId });
    return response.data;
  },

  verifyOTP: async (otp, emailId) => {
    const response = await axios.post(BASE_URL + "/verify/otp", {
      otp,
      emailId,
    });
    return response.data;
  },

  resetPassword: async (emailId, newPass, confirmPass) => {
    const response = await axios.post(BASE_URL + "/reset/password", {
      emailId,
      newPass,
      confirmPass,
    });
    return response.data;
  },
};
