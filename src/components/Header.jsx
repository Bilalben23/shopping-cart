import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <header className='fixed top-0 z-50 flex items-center justify-between w-full px-4 py-1 shadow bg-base-300'>
            <nav>
                <ul className='menu menu-horizontal'>
                    <li>
                        <NavLink to="#" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => (isActive ? "focus" : "blur")}  >Products</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <NavLink to="shoppingCart" className='btn btn-outline btn-sm btn-primary indicator'>
                    <div className='countdown indicator-item w-[27px] h-[27px] rounded-full bg-primary grid place-content-center text-primary-content text-xs shadow-lg'>
                        <span style={{ "--value": cartItems.length }}></span>
                    </div>
                    <FaShoppingCart />
                    Cart
                </NavLink>
            </div>
        </header>
    )
}
