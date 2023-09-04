// "use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"

const rootReducer = combineReducers({
    cart: cartSlice,
},);

export const store = configureStore({
    reducer: rootReducer,
});
