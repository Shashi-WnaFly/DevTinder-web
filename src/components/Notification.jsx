import React from "react";
import { CheckCircle, CircleX, CircleAlert, Ban } from "lucide-react";

const icons = {
  success: <CheckCircle size={24} />,
  warning: <CircleAlert size={24} />,
  error: <Ban size={24} />,
};

const bgColors = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

const Notification = ({ type, message, id }) => {
  return (
    <li
      key={id}
      className={`notification ${bgColors[type]} flex gap-2 p-4 mb-2 rounded-md shadow-lg items-center`}
    >
      <div>{icons[type]}</div>
      <p>{message}</p>
    </li>
  );
};

export default Notification;
