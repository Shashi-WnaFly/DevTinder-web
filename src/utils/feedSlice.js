import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed : (state, action) => {
            return action.payload;
        },
        removeCard : (state, action) => {
            let newArr = state.filter((row) => row._id !== action.payload)
            return newArr;
        },
        removeFeed : (state, action) => {
            return null;
        }
    }
});

export const {addFeed, removeFeed, removeCard} = feedSlice.actions;

export default feedSlice.reducer;