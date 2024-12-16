import { createSlice } from '@reduxjs/toolkit';

// LocalStorage'дан товарларды жана лайктарды алуу
const loadFromLocalStorage = () => {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
};

// LocalStorage'га товарларды жана лайктарды сактоо
const saveToLocalStorage = (data) => {
    localStorage.setItem('cartItems', JSON.stringify(data));
};

const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        ali: loadFromLocalStorage() // Жүктөлгөн товарларды баштапкы абалга орнотуу
    },
    reducers: {
        addCart: (state, action) => {
            state.ali.push({ ...action.payload, isLiked: false }); // isLiked'ти башында false кылып кошобуз
            saveToLocalStorage(state.ali); // LocalStorage'га сактоо
        },
        removeCart: (state, action) => {
            state.ali = state.ali.filter(item => item.id !== action.payload);
            saveToLocalStorage(state.ali); // LocalStorage'га сактоо
        },
        toggleLike: (state, action) => {
            state.ali = state.ali.map(item =>
                item.id === action.payload ? { ...item, isLiked: !item.isLiked } : item
            );
            saveToLocalStorage(state.ali); // Лайк өзгөргөндө да LocalStorage'га сактайбыз
        },
        updateCart: (state, action) => {
            state.ali = action.payload;
            saveToLocalStorage(state.ali); // LocalStorage'га сактоо
        }
    }
});

export const { addCart, removeCart, toggleLike, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
