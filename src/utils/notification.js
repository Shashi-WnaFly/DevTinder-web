import { createSlice } from "@reduxjs/toolkit";

const notificationListSlice = createSlice({
  name: "notificationList",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
    removeNotification: (state, action) => {
      const t = state.find((n) => n.id === action.payload);
      clearTimeout(t.timeout);
      return state.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } =
  notificationListSlice.actions;
export default notificationListSlice.reducer;
