import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            console.log(...state.cartItems)
            const isProductExistInCart = state.cartItems.find(item => item.product.id === action.payload.id)
            if (!isProductExistInCart) {
                state.cartItems.push({ product: action.payload, quantity: 1 })
                toast.success("Product added to your cart!", {
                    position: "top-center",
                    autoClose: 1000,
                    pauseOnHover: false,
                });
            }
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.product.id !== action.payload);
            toast.error("Product removed from your cart!", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: false,
            });
        },
        removeAllFromCart(state) {
            state.cartItems = [];
            toast.error("All products removed from your cart!", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: false,
            });

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