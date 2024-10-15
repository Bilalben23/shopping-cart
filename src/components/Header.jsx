import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='fixed top-0 z-50 flex items-center justify-between w-full px-4 py-1 shadow bg-base-300'>
            <nav>
                <ul className='menu menu-horizontal'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Link to="" className='btn btn-outline btn-sm btn-primary'>
                    <FaShoppingCart />
                    Cart
                </Link>
            </div>
        </header>
    )
}
