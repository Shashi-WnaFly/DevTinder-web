import { useDispatch, useSelector } from "react-redux";
import { CheckCircle, CircleAlert, Ban, OctagonX } from "lucide-react";
import useToast from "../hooks/useToast";
import { removeNotification } from "../utils/notification";

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

const NotificationBar = () => {
  const toastList = useSelector((store) => store.notificationList);
  const dispatch = useDispatch();
  return (
    <ul className="absolute bottom-5 right-5 max-w-6/12">
      {[...toastList].map((notification) => (
        <li
          key={notification.id}
          className={`notification ${bgColors[notification.type]} flex gap-2 p-4 mb-2 rounded-md shadow-lg items-center`}
        >
          <div>{icons[notification.type]}</div>
          <p>{notification.message}</p>
          <button onClick={() => dispatch(removeNotification(notification.id))}>
            <OctagonX />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NotificationBar;
