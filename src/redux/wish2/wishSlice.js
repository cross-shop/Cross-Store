import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [], 
  },
  reducers: {
    addWish: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;
