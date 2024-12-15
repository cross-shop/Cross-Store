import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { ali: [] }, // Баштапкы абал туура орнотулган
    reducers: {
        // Товарды корзинага кошуу
        addCart: (state, action) => {
            const findProduct = state.ali?.find((x) => x.id === action.payload.id);
            if (!findProduct) {
                state.ali.push({ ...action.payload, quantity: 1 }); // Quantity кошулду
            } else {
                findProduct.quantity += 1; // Эгер товар бар болсо, санын көбөйт
            }
        },
        // Корзинадан товарды өчүрүү
        removeCart: (state, action) => {
            state.ali = state.ali?.filter((item) => item.id !== action.payload);
        },
        // Товардын санын азайтуу
        decreaseQuantity: (state, action) => {
            const findProduct = state.ali?.find((x) => x.id === action.payload);
            if (findProduct && findProduct.quantity > 1) {
                findProduct.quantity -= 1;
            } else {
                state.ali = state.ali?.filter((item) => item.id !== action.payload);
            }
        },
        // LocalStorage'ден жүктөө
        setCartFromStorage: (state, action) => {
            state.ali = action.payload || []; // Эгерде payload бош болсо, али массивин бош кылып койобуз
        },
        // Бардык товарларды тазалоо
        clearCart: (state) => {
            state.ali = []; // Бардык товарларды тазалайт
        },
    },
});

export const { addCart, removeCart, decreaseQuantity, setCartFromStorage, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
