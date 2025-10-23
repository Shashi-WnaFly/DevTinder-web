import { createSlice } from "@reduxjs/toolkit";

const subscriptionSlice = createSlice({
  name: "subscriptionType",
  initialState: null,
  reducers: {
    addPlan: (state, action) => {
      return action.payload;
    },
    removePlan: () => null,
  },
});

export const { addPlan, removePlan } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
