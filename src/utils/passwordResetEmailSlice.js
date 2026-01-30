import { createSlice } from "@reduxjs/toolkit";

const passwordResetEmailSlice = createSlice({
  name: "passwordResetEmail",
  initialState: null,
  reducers: {
    addEmailId: (state, action) => {
      return action.payload;
    },
    removeEmailId: () => {
      return null;
    },
  },
});

export const { addEmailId, removeEmailId } = passwordResetEmailSlice.actions;

export default passwordResetEmailSlice.reducer;
