import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload)
        },
        removeCart: (state) => {
            state.items.pop()
        },
        resetCart: (state) => {
            state.items.length = 0
        }
    }
})


export const {addCart, removeCart, resetCart} = cartSlice.actions

export default cartSlice.reducer