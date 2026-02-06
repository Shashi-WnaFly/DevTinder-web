import React, { createElement } from "react";
import { useSelector } from "react-redux";
const Notification = React.lazy(() => import("./Notification"));

const NotificationBar = () => {
  const notificationList = useSelector((store) => store.notificationList);
  return (
    <ul className="absolute bottom-5 right-5 ">
      {[...notificationList].map((notification) =>
        createElement(Notification, {
          key: notification.id,
          type: notification.type,
          message: notification.message,
        }),
      )}
    </ul>
  );
};

export default NotificationBar;
