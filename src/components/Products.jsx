import React, { useRef, useState } from 'react'
import { useGlobalcontext } from '../context'
import { useNavigate } from 'react-router-dom'

const Products = () => {

    const navigate = useNavigate()

    const { state, dispatch } = useGlobalcontext()
    const inputRef = useRef()
    console.log(state)

    const handlesubmmit = (e) => {
        e.preventDefault()
        dispatch({ type: "SET_WORD", payload: inputRef.current.value })
        inputRef.current.value = ""
    }

    const handleclick = (id) => {
        dispatch({ type: "SET_ID", payload: id })
        dispatch({ type: "SET_PRODUCT" })
        navigate(`/products/${state.id}`)
    }

    return (
        <div>
            <div className='text-center m-6 border-b border-double pt-4'>
                <form onSubmit={handlesubmmit}>
                    <input ref={inputRef} type='text' placeholder='Enter here' className='px-6 py-2 mb-4 border border-black' />
                    <button className='mx-4 bg-black text-white px-6 py-2'>Search</button>
                </form>
            </div>
            {state.products.length >= 1 ? <div className='grid grid-cols-4 gap-12 px-6'>
                {state.products.map((product) => <div key={product.id} className='col-span-4 md:col-span-2 lg:col-span-1'>
                    <div className='bg-gray-100 rounded-xl shadow-md hover:translate-y-1 hover:cursor-pointer' onClick={() => handleclick(product.id)}>
                        <img className='w-[350px] h-[250px] mx-auto pt-4 px-4 items-center' src={product.thumbnail} alt='productimage' />
                        <div>
                            <h1 className='text-xl text-center'>
                                {product.title}
                            </h1>
                        </div>
                    </div>
                </div>)}
            </div> : <div className='text-center text-2xl'><h1>No Products Found</h1></div>}
        </div>
    )
}

export default Products