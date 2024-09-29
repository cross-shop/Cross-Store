import { configureStore } from "@reduxjs/toolkit";

import wishReducer from "./wish2/wishSlice";




const myStore = configureStore({
    reducer: {
        wishlist: wishReducer,
    },
});

export default myStore