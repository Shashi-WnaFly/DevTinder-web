import { useRef } from "react";
import Send from "../assets/Send";

const Chat = () => {
  const msg = useRef("");
  const handleSend = () => {
    console.log(msg.current.value);
  }
  return (
    <div className="w-full absolute -z-30 h-screen top-0 left-0">
      <div className="w-full lg:w-6/12 mt-20 mx-auto h-9/12 overflow-y-hidden">
        <h2 className="p-4 text-xl font-semibold">Chat</h2>
        <div className="overflow-y-scroll scroll-smooth h-full flex flex-col px-4">
          <div className=" place-self-start bg-base-300 px-2 py-1 rounded-md max-w-10/12">
            Hi, How are you?
          </div>
          <div className="place-self-end bg-green-700 px-2 py-1 rounded-md max-w-10/12">
            Hi, How are you?
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-6/12 mx-auto flex items-center justify-center gap-2 p-2">
        <input ref={msg} placeholder="Message" type="text" className="w-10/12 px-4 py-3 rounded-full border-2 border-amber-50"/>
        <button onClick={handleSend} className="w-12 bg-green-400 rounded-full p-1 cursor-pointer">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Chat;
