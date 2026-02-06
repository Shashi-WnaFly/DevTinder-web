import { createSlice } from "@reduxjs/toolkit";

const notificationListSlice = createSlice({
  name: "notificationList",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
    removeNotification: (state, action) => {
      return state.filter((n) => n.id !== action.payload);
    }
  },
});

export const { addNotification, removeNotification } = notificationListSlice.actions;
export default notificationListSlice.reducer;
