import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const feedService = {
  getFeed: async () => {
    const response = await axios.get(BASE_URL + "/user/feed", {
      withCredentials: true,
    });
    return response.data;
  },
};
