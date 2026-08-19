import { getFourDigitTime } from "../../utils/common";

const Message = (props) => {
  const { senderId, text, createdAt, loggedUserId } = props.props;
  return (
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
          {getFourDigitTime(createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Message;
