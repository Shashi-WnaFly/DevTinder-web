import React from "react";
import Message from "./Message";

const MsgWithDate = (props) => {
  const { st } = props.props;
  return (
    <div className="w-full">
      <div className="text-xs opacity-70 w-fit mx-auto rounded-md py-1 px-2 bg-gray-800 ">
        {st}
      </div>

      <Message props={props.props} />
    </div>
  );
};

export default MsgWithDate;
