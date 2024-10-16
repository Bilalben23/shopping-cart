import React from 'react'
import ShoppingCartCard from '../components/ShoppingCartCard'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFromCart } from '../features/cart/cartSlice';

export default function ShoppingCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <section className='w-[90%] mx-auto min-h-[320px]'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-xl font-semibold'>Shopping Cart</h1>
                {
                    cartItems.length > 2 && <button type="button" className='btn btn-outline btn-error btn-sm' onClick={() => dispatch(removeAllFromCart())}>Remove All</button>
                }

            </div>
            <div>
                {
                    cartItems.length > 0
                        ? cartItems.map(product => {
                            return <ShoppingCartCard product={product} />
                        })
                        : <div className='min-h-[255px] grid place-content-center text-center'>
                            <p>No products has been added yet!</p>
                        </div>
                }
            </div>
        </section >
    )
}
