import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const profileService = {
  updateProfile: async (profileData) => {
    const response = await axios.post(
      BASE_URL + "/profile/edit",
      profileData,
      { withCredentials: true }
    );
    return response.data;
  },

  getUserConnections: async () => {
    const response = await axios.get(`${BASE_URL}/user/connections`, {
      withCredentials: true,
    });
    return response.data;
  },

  getReceivedRequests: async () => {
    const response = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true,
    });
    return response.data;
  },

  sendConnectionRequest: async (status, userId) => {
    const response = await axios.post(
      BASE_URL + `/request/send/${status}/${userId}`,
      {},
      { withCredentials: true }
    );
    return response.data;
  },

  acceptRequest: async (requestId) => {
    const response = await axios.post(
      BASE_URL + `/request/review/interested/${requestId}`,
      {},
      { withCredentials: true }
    );
    return response.data;
  },

  rejectRequest: async (requestId) => {
    const response = await axios.post(
      BASE_URL + `/request/review/ignored/${requestId}`,
      {},
      { withCredentials: true }
    );
    return response.data;
  },
};
