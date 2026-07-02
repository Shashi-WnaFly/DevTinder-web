import { BASE_URL } from "../utils/constants";
import api from "../configs/api";

export const feedService = {
  getFeed: async () => {
    const response = await api.get("/user/feed");
    return response.data;
  },
};
