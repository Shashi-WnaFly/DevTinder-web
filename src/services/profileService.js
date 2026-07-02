import { BASE_URL } from "../utils/constants";
import api from "../configs/api";

export const profileService = {
  updateProfile: async (profileData) => {
    const response = await api.post("/profile/edit", profileData);
    return response.data;
  },

  getUserConnections: async () => {
    const response = await api.get(`${BASE_URL}/user/connections`, {
      withCredentials: true,
    });
    return response.data;
  },

  getReceivedRequests: async () => {
    const response = await api.get("/user/requests/received");
    return response.data;
  },

  sendConnectionRequest: async (status, userId) => {
    const response = await api.post(`/request/send/${status}/${userId}`);
    return response.data;
  },

  acceptRequest: async (requestId) => {
    const response = await api.post(`/request/review/interested/${requestId}`);
    return response.data;
  },

  rejectRequest: async (requestId) => {
    const response = await api.post(`/request/review/ignored/${requestId}`);
    return response.data;
  },
};
