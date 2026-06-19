import { configureStore } from "@reduxjs/toolkit";
import cartReducer from"../features/cart/cartSlice"

// store
export const store = configureStore({
    reducer: {
        cart: cartReducer
       
    }
})