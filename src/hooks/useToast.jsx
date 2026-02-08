import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addNotification, removeNotification } from "../utils/notification";

const useToast = (duration = 3000) => {
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
  return { showToast };
};

export default useToast;
