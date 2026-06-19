import { createSlice } from "@reduxjs/toolkit"

const savedCart = JSON.parse(localStorage.getItem("cart")) || []


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: savedCart,
    },
    reducers: {
        // ADD TO CART 
        addToCart: (state, action) => {
            // state.items = cart


            const exist = state.items.find(item => item.id === action.payload.id)
            if (exist) {
                exist.qty += 1

            } else {
                state.items.push({ ...action.payload, qty: 1 })
            }
            localStorage.setItem("cart", JSON.stringify(state.items))

        },



        //remove

        removeFromCart: (state, action) => {

            state.items = state.items.filter(item => item.id !== action.payload.id)
            localStorage.setItem("cart", JSON.stringify(state.items))
            
        },


        // increase

        increaseQty: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id)

            if(item) {
                item.qty ++
            }
             localStorage.setItem("cart", JSON.stringify(state.items))

        },

        //decrease

        decreaseQty: (state, action) => {

              const item = state.items.find(item => item.id === action.payload.id)
              if(item && item.qty > 1 ) {
                item.qty --
            }
             localStorage.setItem("cart", JSON.stringify(state.items))
         },


    }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions



export default cartSlice.reducer
