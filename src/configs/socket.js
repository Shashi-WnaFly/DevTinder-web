import { io } from "socket.io-client";
import { BASE_URL } from "../utils/constants";

export const createSocketConnection = () => {
    return io("/", {withCredentials: true});
}