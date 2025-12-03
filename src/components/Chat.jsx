import { useEffect, useState } from "react";
import Send from "../assets/Send";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const loggedUserId = user?._id;

  const handleSend = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", { loggedUserId, targetUserId, text: newMsg });
    setNewMsg("");
  };

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { loggedUserId, targetUserId });

    socket.on("messageReceived", ({ sender, text }) => {
      setMessage((message) => [...message, { userId: sender, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [loggedUserId, targetUserId]);

  return (
    <div className="w-full absolute -z-30 h-screen top-0 left-0">
      <div className="w-full lg:w-6/12 mt-20 mx-auto h-9/12 overflow-y-hidden">
        <h2 className="p-4 text-xl font-semibold">Chat</h2>
        <div className="overflow-y-scroll scroll-smooth h-full flex flex-col px-4">
          {message?.map(({ userId, text }, index) => {
            return userId.toString() === loggedUserId.toString() ? (
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
        </div>
      </div>
      <div className=" w-full lg:w-6/12 mx-auto flex items-center justify-center gap-2 p-2">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Message"
          type="text"
          className="w-10/12 px-4 py-3 rounded-full border-2 border-amber-50"
        />
        <button
          onClick={handleSend}
          className="w-12 bg-green-400 rounded-full p-1 cursor-pointer"
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Chat;
