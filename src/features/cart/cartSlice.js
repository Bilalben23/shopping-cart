import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            console.log("add to cart")

        },
        removeFromCart(state, action) {
            console.log("remove from cart")

        },
        removeAllFromCart(state, actions) {
            console.log("remove all from cart");

        },
        isProductInCart(state, action) {
            console.log("check if the product is in the cart");

        },
        incrementQuantityOfProduct(state, action) {
            console.log("increment quantity of product");

        },
        decrementQuantityOfProduct(state, action) {
            console.log("decrement quantity of product");
        }

    }
})


export const {
    addToCart,
    removeFromCart,
    removeAllFromCart,
    isProductInCart,
    incrementQuantityOfProduct,
    decrementQuantityOfProduct
} = cartSlice.actions;

export default cartSlice.reducer;