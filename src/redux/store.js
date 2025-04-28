import { configureStore } from "@reduxjs/toolkit";

import wishReducer from "./wish2/wishSlice";
import cartReducer from "./cart/cartSlice";

const myStore = configureStore({
  reducer: {
    wishlist: wishReducer,
    carts: cartReducer,
  },
});

export default myStore;