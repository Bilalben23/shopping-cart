import React from 'react'
import ShoppingCartCard from '../components/ShoppingCartCard'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.quantity * item.product.price), 0).toFixed(2)


    return (
        <section className='w-[90%] mx-auto min-h-[320px]'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='font-semibold lg:text-xl'>Shopping Cart</h1>
                {
                    cartItems.length > 2 && <button type="button" className='btn btn-outline btn-error btn-sm' onClick={() => dispatch(removeAllFromCart())}>Remove All</button>
                }

            </div>
            {
                cartItems.length > 0 && <table className='table shadow-lg table-xs md:table-sm lg:table-md'>
                    {
                        cartItems.map((product, index) => {
                            return <ShoppingCartCard
                                key={product?.product?.id}
                                product={product}
                                index={index}
                            />
                        })
                    }
                </table>
            }
            {cartItems.length > 0 && <div className='flex justify-end w-full'>
                <div className="p-4 border-4 shadow-lg border-base-200 w-fit">
                    <div className='flex items-center mb-2 space-x-2'>
                        <div className="text-lg font-semibold md:text-xl stat-title">Total Price</div>
                        <div className="text-xl font-bold md:text-2xl text-success stat-value badge">${totalPrice}</div>
                    </div>
                    <div className="stat-actions">
                        <button className="btn btn-sm md:btn-md btn-success btn-block">
                            Checkout
                            <span className='text-sm font-normal'> ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})</span>
                        </button>
                    </div>
                </div>
            </div>}

            {
                cartItems.length === 0 && (
                    <div className='min-h-[255px] flex flex-col items-center justify-center text-center bg-base-100 rounded-lg p-6 shadow-md'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 mb-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.34 2M7 13h10l4-8H5.31M7 13L5.31 5M7 13h11a2 2 0 002-2m0 0L20.34 9M8 21h8m0 0a2 2 0 002-2m-10 2a2 2 0 01-2-2m0 0a2 2 0 012-2h8m0 0a2 2 0 012 2"
                            />
                        </svg>
                        <p className='mb-2 text-xl font-semibold text-gray-700'>
                            Your cart is currently empty.
                        </p>
                        <p className='mb-6 text-gray-500'>
                            Looks like you haven't added any products to your cart yet.
                        </p>
                        <Link to="/products" className='btn btn-primary'>
                            Browse Products
                        </Link>
                    </div>
                )
            }
        </section >
    )
}
