import React from 'react'
import { useGlobalcontext } from '../context'

const Cart = () => {

    const { state, dispatch } = useGlobalcontext()

    const handleDelete = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id })
    }

    if (state.cart.length === 0) {
        return (
            <div className='text-center my-24'>
                <h1 className='text-3xl'>
                    No items in cart
                </h1>
            </div>
        )
    }

    return (
        <div className='mt-6'>
            <h1 className='text-center text-3xl font-bold my-6'>Cart</h1>
            <div >
                {state.cart.map((list) => <div className='max-w-[800px] bg-slate-100 mb-4 mx-auto md:flex justify-between p-2 rounded-lg shadow-md'>
                    <div className='md:flex'>
                        <img src={list.thumbnail} alt="productNames" className='md:w-[80px]' />
                        <h1 className='p-2'>{list.title}</h1>
                    </div>
                    <div>
                        <p className='md:pt-2 pl-2'>Price : ${list.price} /-</p>
                        <p className='md:pt-2 pl-2'> Discount Price : $ {list.price - (list.price * list.discountPercentage / 100)} /-</p>
                        <button className='mt-2 ml-2 p-2 bg-red-500 text-white hover:bg-red-700' onClick={() => handleDelete(list.id)}>REMOVE</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Cart