import React from "react";
import Message from "./Message";

const MsgWithDate = ({ _id, senderId, text, loggedUserId, st, createdAt }) => {
  return (
    <div key={_id ?? `${senderId}-${text}`} className="w-full">
      <div className="text-xs opacity-70 w-fit mx-auto rounded-md py-1 px-2 bg-gray-800 ">
        {st}
      </div>

      <Message props={{ _id, senderId, text, createdAt, loggedUserId }} />
    </div>
  );
};

export default MsgWithDate;
