import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='max-w-screen flex justify-between p-4 bg-[#9D4EDD] text-[#10002B] rounded-b-lg shadow-2xl'>
            <div>
                <h1 className='text-3xl font-bold'>SHOPPING</h1>
            </div>
            <div className='flex px-4 text-xl'>
                <Link className='mx-4 hover:underline cursor-pointer' to="/products">Products</Link>
                <Link className='hover:underline cursor-pointer' to="/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Navbar