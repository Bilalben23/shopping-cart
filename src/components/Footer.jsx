import React from 'react'

export default function Footer() {

    const date = new Date();

    return (
        <div className='py-5 text-center bg-base-300'>
            <p>All right reserved &copy; {date.getFullYear()}</p>
        </div>
    )
}
