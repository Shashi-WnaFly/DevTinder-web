import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Send from "../../assets/Send";
import { createSocketConnection } from "../../configs/socket";
import api from "../../configs/api";
import { addChats, chatPush } from "../../utils/chatSlice";
import Message from "./Message";
import MsgWithDate from "./MsgWithDate";
import { getFullDate } from "../../utils/common";
import { ChevronsDown } from "lucide-react";

const ChatPage = () => {
  const {
    items: msgList = [],
    nextCursor,
    hasMore,
  } = useSelector((store) => store.chat);
  const user = useSelector((store) => store.user);

  const [newMsg, setNewMsg] = useState("");
  // const [loading, setLoading] = useState("");
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [newMsgArrive, setNewMsgArrive] = useState(false);

  const historyLoadingRef = useRef(false);
  const pendingScrollRef = useRef(null);
  const chatRef = useRef(null);
  const msgEndRef = useRef(null);
  const socketRef = useRef(null);
  const inputRef = useRef(null);
  const shouldAutoScrollRef = useRef(false);

  const { targetUserId } = useParams();
  const dispatch = useDispatch();
  const loggedUserId = user?._id;
  let prevDate = "";

  const loadInitialChats = useCallback(async () => {
    if (!targetUserId) return;

    try {
      const { data } = await api.get(`/chat/${targetUserId}`);

      // Tell the layout effect this is the first load.
      pendingScrollRef.current = { type: "bottom" };

      dispatch(
        addChats({
          data: data.data,
          hasMore: data.hasMore,
          nextCursor: data.nextCursor,
        }),
      );
    } catch (error) {
      console.error("Could not load chats:", error);
    }
  }, [dispatch, targetUserId]);

  const loadOlderChats = useCallback(async () => {
    if (historyLoadingRef.current || !hasMore || !nextCursor) return;

    const container = chatRef.current;
    if (!container) return;

    historyLoadingRef.current = true;

    // Save position BEFORE older messages are prepended.
    pendingScrollRef.current = {
      type: "restore",
      top: container.scrollTop,
      height: container.scrollHeight,
    };

    try {
      const { data } = await api.get(`/chat/${targetUserId}`, {
        params: { before: nextCursor },
      });

      dispatch(
        addChats({
          data: data.data,
          hasMore: data.hasMore,
          nextCursor: data.nextCursor,
        }),
      );
    } catch (error) {
      pendingScrollRef.current = null;
      console.error("Could not load chats:", error);
    } finally {
      historyLoadingRef.current = false;
    }
  }, [dispatch, hasMore, nextCursor, targetUserId]);

  const handleSend = () => {
    const text = newMsg.trim();

    if (!text || !socketRef.current || !targetUserId) return;

    socketRef.current.emit("sendMessage", {
      targetUserId,
      text,
    });

    setNewMsg("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleScroll = () => {
    const container = chatRef.current;
    if (!container) return;

    if (container.scrollTop <= 20) {
      loadOlderChats();
    }

    const atBottom = isNearBottom(container);
    setShowScrollDown(!atBottom);

    if (atBottom) setNewMsgArrive(false);
  };

  const isNearBottom = (container) => {
    if (!container) return true;

    const disFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;
    return disFromBottom <= 20;
  };

  const scrollToBottom = () => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    if (msgList.length === 0) {
      loadInitialChats();
    }
  }, [msgList.length, loadInitialChats]);

  useLayoutEffect(() => {
    const container = chatRef.current;
    const pending = pendingScrollRef.current;

    if (!container || !pending) return;

    if (pending.type === "bottom") {
      container.scrollTop = container.scrollHeight;
    }

    if (pending.type === "restore") {
      const heightAddedAbove = container.scrollHeight - pending.height;

      // The same old message remains at the same screen location.
      container.scrollTop = pending.top + heightAddedAbove;
    }

    pendingScrollRef.current = null;
  }, [msgList]);

  useLayoutEffect(() => {
    if (!shouldAutoScrollRef.current) return;
    console.log("useLayoutEffect..");
    scrollToBottom();
    shouldAutoScrollRef.current = false;
  }, [msgList]);

  useEffect(() => {
    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinChat", { targetUserId });

    const onMessageReceived = ({ _id, senderId, text, createdAt }) => {
      const shouldScroll = isNearBottom(chatRef.current);

      shouldAutoScrollRef.current = shouldScroll;
      if (!shouldScroll) setNewMsgArrive(true);

      dispatch(chatPush({ _id, senderId, text, createdAt }));
    };

    socket.on("messageReceived", onMessageReceived);

    return () => {
      socket.off("messageReceived", onMessageReceived);
      socket.disconnect();
      socketRef.current = null;
    };
  }, [dispatch, loggedUserId, targetUserId]);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="relative mx-auto flex h-screen w-full flex-col pt-16 lg:w-6/12">
        <div className="border border-gray-400">
          <h2 className="p-4 text-xl font-semibold">Chat</h2>
        </div>

        <div
          ref={chatRef}
          onScroll={handleScroll}
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 my-1"
        >
          {historyLoadingRef.current && <p>Loading…</p>}

          {msgList.map(({ _id, senderId, text, createdAt }) => {
            const st = getFullDate(createdAt);
            const fl = prevDate == st;
            prevDate = st;
            return fl ? (
              <Message
                key={_id}
                props={{ senderId, text, createdAt, loggedUserId }}
              />
            ) : (
              <MsgWithDate
                key={_id}
                props={{ senderId, text, createdAt, loggedUserId, st }}
              />
            );
          })}

          <div ref={msgEndRef} />
        </div>
        {showScrollDown && (
          <button
            type="button"
            onClick={scrollToBottom}
            className={`absolute right-10 bottom-25 h-10 w-10 rounded-full cursor-pointer ${newMsgArrive ? "bg-green-500 bg-radial-[circle, #14ffe9,#ffeb3b,#ff00f3,#ff00c4,#14ffe9] [background-size:400%] animate-myHue" : ""}`}
          >
            <div
              className={`absolute z-10 top-1/2 left-1/2 [transform:translate(-50%,-50%)] inline-flex justify-center content-center p-2 rounded-full text-gray-300 ${newMsgArrive ? "bg-black" : "bg-gray-600"}`}
            >
              <ChevronsDown size={18} />
            </div>
            <span className=" blur-xs rounded-full absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] h-full w-full [background:inherit]"></span>
          </button>
        )}

        <div className="flex items-center gap-2 p-2">
          <input
            ref={inputRef}
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Message"
            className="w-full rounded-full border-2 border-amber-50 px-4 py-3"
          />
          <button
            onClick={handleSend}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            className="w-12 rounded-full bg-green-400 p-1 active:bg-green-600"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
