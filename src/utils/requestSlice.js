import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state, action) => action.payload,
        removeRequestAll: () => null,
        removeRequest: (state, action) => {
            const newData = state.filter((row) => row._id !== action.payload);
            return newData;
        }
    }
});

export const {addRequests, removeRequest, removeRequestAll} = requestSlice.actions;

export default requestSlice.reducer;