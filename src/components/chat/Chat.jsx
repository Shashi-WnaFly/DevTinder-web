import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Send from "../../assets/Send";
import { createSocketConnection } from "../../configs/socket";
import api from "../../configs/api";
import { addChats, chatPush } from "../../utils/chatSlice";

const Chat = () => {
  const {
    items: msgList = [],
    page,
    hasMore,
  } = useSelector((store) => store.chat);
  const user = useSelector((store) => store.user);

  const [newMsg, setNewMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);
  const msgEndRef = useRef(null);
  const socketRef = useRef(null);

  const { targetUserId } = useParams();
  const dispatch = useDispatch();
  const loggedUserId = user?._id;
  let prevDate = "";

  const getChats = useCallback(async () => {
    if (loading || !hasMore || !targetUserId) return;

    const container = chatRef.current;
    const previousHeight = container?.scrollHeight ?? 0;

    setLoading(true);

    try {
      const { data } = await api.get(
        `/chat/${targetUserId}?page=${page}&limit=15`,
      );

      dispatch(
        addChats({
          data: data.data,
          hasMore: data.hasMore,
        }),
      );

      requestAnimationFrame(() => {
        if (!container) return;

        const newHeight = container.scrollHeight;
        container.scrollTop += newHeight - previousHeight;
      });
    } catch (error) {
      console.error("Could not load chats:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch, hasMore, loading, page, targetUserId]);

  useEffect(() => {
    if (msgList.length === 0) {
      getChats();
    }
  }, []);

  useEffect(() => {
    const socket = createSocketConnection();
    socketRef.current = socket;
    console.log("joinChat");
    socket.emit("joinChat", { targetUserId });

    const onMessageReceived = ({ senderId, text, createdAt }) => {
      dispatch(chatPush({ senderId, text, createdAt }));
    };

    socket.on("messageReceived", onMessageReceived);

    return () => {
      socket.off("messageReceived", onMessageReceived);
      socket.disconnect();
      socketRef.current = null;
    };
  }, [dispatch, loggedUserId, targetUserId]);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgList.length]);

  const handleSend = () => {
    const text = newMsg.trim();

    if (!text || !socketRef.current || !targetUserId) return;

    socketRef.current.emit("sendMessage", {
      targetUserId,
      text,
    });

    setNewMsg("");
  };

  const handleScroll = () => {
    const container = chatRef.current;

    if (container?.scrollTop <= 20) {
      getChats();
    }
  };

  const getfullDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="absolute inset-0 -z-10">
      <div className="mx-auto flex h-screen w-full flex-col pt-16 lg:w-6/12">
        <div className="border border-gray-400">
          <h2 className="p-4 text-xl font-semibold">Chat</h2>
        </div>

        <div
          ref={chatRef}
          onScroll={handleScroll}
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 py-2"
        >
          {loading && <p>Loading…</p>}

          {msgList.map(({ _id, senderId, text, createdAt }) => {
            const st = getfullDate(createdAt);
            const fl = prevDate == st;
            prevDate = st;
            return fl ? (
              <div
                key={_id ?? `${senderId}-${text}`}
                className={
                  String(senderId) === String(loggedUserId)
                    ? "place-self-end rounded-md bg-green-700 px-2 py-1"
                    : "place-self-start rounded-md bg-base-300 px-2 py-1"
                }
              >
                <div className="flex gap-2">
                  <div>{text}</div>
                  <div className="text-xs opacity-80 place-self-end">
                    {new Date(createdAt).toLocaleTimeString("en-IN", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: false,
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div key={_id ?? `${senderId}-${text}`} className="w-full">
                <div className="text-xs opacity-70 w-fit mx-auto rounded-md py-1 px-2 bg-gray-800 ">
                  {st}
                </div>

                <div
                  className={
                    String(senderId) === String(loggedUserId)
                      ? "place-self-end rounded-md bg-green-700 px-2 py-1"
                      : "place-self-start rounded-md bg-base-300 px-2 py-1"
                  }
                >
                  <div className="flex gap-2">
                    <div>{text}</div>
                    <div className="text-xs opacity-80 place-self-end">
                      {new Date(createdAt).toLocaleTimeString("en-IN", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div ref={msgEndRef} />
        </div>

        <div className="flex items-center gap-2 p-2">
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Message"
            className="w-full rounded-full border-2 border-amber-50 px-4 py-3"
          />
          <button
            onClick={handleSend}
            className="w-12 rounded-full bg-green-400 p-1 active:bg-green-600"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
