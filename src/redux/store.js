import { configureStore } from "@reduxjs/toolkit";

import wishReducer from "./wish2/wishSlice";
import cartReducer from "./cart/cartSlice"
import searchReducer from "./search/searchSlice";

const myStore = configureStore({
    reducer: {
        wishlist: wishReducer,
        carts: cartReducer,
        search: searchReducer,
    },
});

export default myStore