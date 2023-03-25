import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            if(state.products.find(item => item.id === action.payload.id)) {
                alert("This product is already in the cart")
            } else {
                state.products.push(action.payload)
                state.totalPrice = state.totalPrice + action.payload.price * action.payload.count
            }
        },
        deleteFromCart: (state, action) => {
            state.products = []
            state.totalPrice = 0
        },
        increaseCountProduct: (state, action) => {
            const index = state.products.findIndex(element => element.id === action.payload)
            state.products[index].count += 1
            state.totalPrice += state.products[index].price 
        },
        decreaseCountProduct: (state, action) => {
            const index = state.products.findIndex(element => element.id === action.payload)
            state.totalPrice -= state.products[index].price
            if(state.products[index].count === 1) {
                state.products = state.products.slice(index-1, index)
            } else {
                state.products[index].count -= 1 
            }
        }
    }
})

export const {addToCart, deleteFromCart, decreaseCountProduct, increaseCountProduct} = cartSlice.actions
export default cartSlice.reducer