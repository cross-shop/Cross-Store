import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWish: (state, action) => {
      const product = {
        ...action.payload,
        dateAdded: new Date().toISOString(),
      };
      if (!state.wishlist.some((item) => item.id === product.id)) {
        state.wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeWish: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addWish, removeWish } = wishSlice.actions;
export default wishSlice.reducer;