import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotification, removeNotification } from "../utils/notification";

const useToast = (duration = 3000) => {
  const toastList = useSelector((store) => store.notificationList);
  const dispatch = useDispatch();

  const showToast = useCallback(
    (type, message) => {
      const id = Date.now();
      const to = setTimeout(() => {
        dispatch(removeNotification(id));
      }, duration);
      dispatch(addNotification({ id, type, message, timeout: to }));
    },
    [duration],
  );

  const removeToast = useCallback((id) => {
    const t = toastList.find((n) => n.id == id);
    if (t) {
      clearTimeout(t.timeout);
    }

    return toastList.filter((n) => n.id !== id);
  }, []);
  return { showToast, removeToast };
};

export default useToast;
