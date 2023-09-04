// "use client"
import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem("cartItems") !== null ?
    JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
    products: items,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            const item = state.products.find(item => item.id ===
                actions.payload.id);
            const sameSize = state.products.find(item => item.total ===
                actions.payload.total)
            if (item && sameSize) {
                item.quantity += actions.payload.quantity
            } else {
                state.products.push(actions.payload)
            }
            localStorage.setItem("cartItems",JSON.stringify(state.products.map(
                item=>item)))
        },

        removeItem: (state, action) => {
            const { itemId, size ,quantity } = action.payload;
            const updatedProducts = state.products.filter(item => 
                !(item.id === itemId
                && item.options === size && item.quantity === quantity)
                );
            state.products = updatedProducts;
            localStorage.setItem("cartItems",JSON.stringify(state.products.map(
                item=>item)))
        },

        resetCart: (state) => {
            state.products = []
        },

    },
})
export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

