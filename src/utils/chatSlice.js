import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  page: 1,
  hasMore: true,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChats: (state, action) => {
      state.items = [...action.payload.data, ...state.items];
      state.hasMore = action.payload.hasMore;
      state.page += 1;
    },
    chatPush: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addChats, chatPush } = chatSlice.actions;
export default chatSlice.reducer;
