import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    products: [],
}
// if (typeof window !== 'undefined') {
//     const items = localStorage.getItem('cartItems');
//     initialState.products = items !== null ? JSON.parse(items) : [];
// }
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            const item = state.products.find(item => item.id ===
                actions.payload.id);
            const sameSize = state.products.find(item => item.options ===
                actions.payload.options)
            if (item && sameSize) {
                item.quantity += actions.payload.quantity
            } else {
                state.products.push(actions.payload)
            }
            // localStorage.setItem("cartItems", JSON.stringify(state.products.map(
            //     item => item)))
        },
        removeItem: (state, action) => {
            const { itemId, size, quantity } = action.payload;
            const updatedProducts = state.products.filter(item =>
                !(item.id === itemId
                    && item.options === size && item.quantity === quantity)
            );
            state.products = updatedProducts;
            // localStorage.setItem("cartItems", JSON.stringify(state.products.map(
            //     item => item)))
        },
    },
})
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

