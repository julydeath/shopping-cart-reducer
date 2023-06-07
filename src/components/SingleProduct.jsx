import React, { useState } from 'react'
import { useGlobalcontext } from '../context'


const SingleProduct = () => {
    const { state, dispatch } = useGlobalcontext()
    const [moreImages, setMoreImages] = useState(false)

    const handleClick = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product })
    }

    return (
        <div>{state.product.map((li) => <div key={li.id}>
            <div className='w-[80%]  mx-auto mt-24 rounded-lg bg-slate-100' >
                <div className='md:flex'>
                    <img className='p-4' src={li.thumbnail} alt='productImage' />
                    <div className='pl-4'>
                        <h1 className='pt-4 text-xl md:text-3xl font-semibold'>
                            {li.title}
                        </h1>
                        <p>
                            Brand : {li.brand}
                        </p>
                        <p className='text-sm'>
                            rating : {li.rating}
                        </p>
                        <p className="pt-2">
                            Price : $ {li.price} /-
                        </p>
                        <p>
                            Discount Price : $ {li.price - (li.price * li.discountPercentage / 100)} /-
                        </p>
                        <button className='bg-black text-white px-6 py-2 mt-6 mb-2 active:bg-slate-700' onClick={() => handleClick(li)}>Add to cart</button>
                    </div>
                </div>

            </div>
            <div className='text-center text-blue-700 hover:underline hover:cursor-pointer' onClick={() => setMoreImages(!moreImages)}>
                More Images
            </div>
            {moreImages ? <div className={`w-[80%] mx-auto mt-10 rounded-lg mb-4 bg-slate-100 grid grid-cols-${li.images.length}`}>
                {li.images.map((image, index) => <div key={index} className='m-2 col-span-4 md:col-span-2 lg:col-span-1 mx-auto'>
                    <img className='w-[200px] h-[100px]' src={image} alt='images' />
                </div>)}
            </div> : null}
        </div>)}</div>
    )
}

export default SingleProduct