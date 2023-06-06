import React from 'react'
import { useGlobalcontext } from '../context'


const SingleProduct = () => {
    const { state } = useGlobalcontext()
    return (
        <div>{state.product.map((li) => <div key={li.key}>
            <div>
                <div>
                    <img src={li.thumbnail} alt='productImage' />
                </div>
            </div>
        </div>)}</div>
    )
}

export default SingleProduct