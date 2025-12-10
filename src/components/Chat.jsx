import { useEffect, useRef, useState } from "react";
import Send from "../assets/Send";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const loggedUserId = user?._id;
  const msgEndRef = useRef(null);

  const handleSend = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", { loggedUserId, targetUserId, text: newMsg });
    setNewMsg("");
  };

  const getChats = async () => {
    const chats = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
      withCredentials: true,
    });

    setMessage((message) => [...message, ...chats.data.data]);
  };

  useEffect(() => {
    if (message.length == 0) getChats();
  }, []);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView();
  }, [message]);

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { loggedUserId, targetUserId });
    socket.on("messageReceived", ({ senderId, text }) => {
      setMessage((message) => [...message, { senderId, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [loggedUserId, targetUserId]);

  return (
    <div className="absolute w-full h-screen top-0 left-0 -z-10">
      <div className="w-full flex h-screen flex-col lg:w-6/12 mx-auto pt-16">
        <div className="border-1 border-gray-400">
          <h2 className="p-4 text-xl font-semibold">Chat</h2>
        </div>
        <div className="w-full mx-auto self-stretch overflow-x-hidden">
          <div className="scroll-smooth flex flex-col gap-2 px-4 py-2">
            {message?.map(({ senderId, text }, index) => {
              return senderId.toString() === loggedUserId.toString() ? (
                <div
                  key={index}
                  className="place-self-end bg-green-700 px-2 py-1 rounded-md max-w-10/12"
                >
                  {text}
                </div>
              ) : (
                <div
                  key={index}
                  className=" place-self-start bg-base-300 px-2 py-1 rounded-md max-w-10/12"
                >
                  {text}
                </div>
              );
            })}
            <div ref={msgEndRef}></div>
          </div>
        </div>
        <div className=" w-full place-items-start flex items-center justify-center gap-2 p-2">
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Message"
            type="text"
            className="w-11/12 py-3 px-4 rounded-full border-2 border-amber-50"
          />
          <button
            onClick={handleSend}
            className="w-12 bg-green-400 rounded-full p-1"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
