import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("cartItems", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    ali: loadFromLocalStorage(),
  },
  reducers: {
    addCart: (state, action) => {
      state.ali.push({ ...action.payload, isLiked: false });
      saveToLocalStorage(state.ali);
    },
    removeCart: (state, action) => {
      state.ali = state.ali.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.ali);
    },
    toggleLike: (state, action) => {
      state.ali = state.ali.map((item) =>
        item.id === action.payload ? { ...item, isLiked: !item.isLiked } : item
      );
      saveToLocalStorage(state.ali);
    },
    updateCart: (state, action) => {
      state.ali = action.payload;
      saveToLocalStorage(state.ali);
    },
    clearCart: (state) => {
      state.ali = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    }    
  },
});

export const { addCart, removeCart, toggleLike, updateCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;