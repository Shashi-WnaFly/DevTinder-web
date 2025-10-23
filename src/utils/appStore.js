import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import requestSlice from "./requestSlice";
import connectionSlice from "./connectionSlice";
import popUpSlice from "./popUpSlice";
import subscriptionSlice from "./subscriptionSlice"

const appStore = configureStore({
    reducer: {
        user: userSlice,
        feed: feedSlice,
        requests: requestSlice,
        connections: connectionSlice,
        popUp: popUpSlice,
        subscriptionType: subscriptionSlice,
    }
});

export default appStore;