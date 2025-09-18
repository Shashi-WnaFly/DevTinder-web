import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: "popUp",
    initialState: false,
    reducers : {
        openPopUp: (state, payload) => true,
        closePopUp: (state, payload) => false
    }
})

export const {openPopUp, closePopUp} = popUpSlice.actions;

export default popUpSlice.reducer;