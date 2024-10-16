import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <header className='fixed top-0 z-50 flex items-center justify-between w-full px-4 py-1 shadow bg-base-300'>
            <nav>
                <ul className='menu menu-horizontal'>
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Link to="shoppingCart" className='btn btn-outline btn-sm btn-primary indicator'>
                    <span className=' indicator-item badge badge-primary w-[25px] h-[25px]'>{cartItems.length}</span>
                    <FaShoppingCart />
                    Cart
                </Link>
            </div>
        </header>
    )
}
