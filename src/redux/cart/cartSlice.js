import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {ali: [] || null},
    reducers: {
        addCart: (state,action) => {
            const findProduct = state.ali.find((x) => x.id == action.payload.id)
            if(!findProduct) {
                state.ali.push(action.payload)
            }
        }
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer