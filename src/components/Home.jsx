import React, { useEffect, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    const images = ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80", "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1340&q=80", "https://images.unsplash.com/photo-1544468266-6a8948003cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"]

    const [count, setCount] = useState(0)
    const handleLeft = () => {
        setCount((prev) => prev - 1)
        if (count <= 0) {
            return setCount(images.length - 1)
        }
    }

    const handleRight = () => {
        setCount((prev) => prev + 1)
        if (count >= images.length - 1) {
            setCount(0)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleRight()
        }, 1500)
        return () => clearInterval(interval)
    }, [count])

    return (
        <div className='my-4'>
            <div className='flex mb-4'>
                <AiFillCaretLeft onClick={handleLeft} className=' text-black z-10 h-[80vh] items-center hover:cursor-pointer' size={50} />
                <img className='w-full h-[80vh] rounded-lg ease-in-out duration-500' src={images[count]} alt="newImages" />
                <AiFillCaretRight onClick={handleRight} className=' text-black z-10 h-[80vh] items-center hover:cursor-pointer' size={50} />
            </div>
            <div className='text-center mt-[-40px]'>
                <button className='bg-black text-white px-10 py-4' onClick={() => navigate("/products")}>
                    SHOP NOW
                </button>
            </div>

        </div>
    )
}

export default Home