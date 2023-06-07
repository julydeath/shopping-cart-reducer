
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    return (
        <div className='text-black bg-slate-200 flex justify-between p-4 shadow-2xl'>
            <div>
                <Link className='text-3xl font-bold hover:cursor-pointer' to="/">MANOJ</Link>
            </div>
            <div className='mx-2 hidden md:flex'>
                <Link className='mx-4 text-xl hover:underline' to="/products">Products</Link>
                <Link className='mx-4 text-xl hover:underline' to="/cart">Cart</Link>
            </div>

            {/* Menu Buttons */}

            <div className='md:hidden z-10'>
                {menu ? <GrClose onClick={() => setMenu(!menu)} size={30} className='bg-white' /> : <GiHamburgerMenu onClick={() => setMenu(!menu)} size={30} />}
            </div>

            {/* Mobile Navbar */}

            <div className={menu ? " fixed top-0 left-0 overflow-y-hidden w-full h-full bg-black text-white text-center" : "hidden"}>
                <div >
                    <h1 className='text-3xl font-bold hover:cursor-pointer m-3 pb-2 border-b '>MANOJ</h1>
                </div>
                <div className='w-[30%] mx-auto flex flex-col my-12'>
                    <Link className='my-4 py-2 text-xl hover:tracking-widest border-b' to="/products">Products</Link>
                    <Link className='my-4 py-2 text-xl hover:tracking-widest border-b' to="/cart">Cart</Link>
                </div>
            </div>


        </div>
    )
}

export default Navbar