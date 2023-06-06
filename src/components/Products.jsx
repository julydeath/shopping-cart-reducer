import React, { useRef } from 'react'
import { useGlobalcontext } from '../context'

const Products = () => {

    const { state, dispatch } = useGlobalcontext()
    console.log(state)
    const inputRef = useRef()

    const handlesubmmit = (e) => {
        e.preventDefault()
        dispatch({ type: "SET_WORD", payload: inputRef.current.value })
        inputRef.current.value = ""
    }

    return (
        <div>
            <div>
                <form onSubmit={handlesubmmit}>
                    <input ref={inputRef} type='text' placeholder='Enter here' />
                    <button>Search</button>
                </form>
            </div>
            {state.products.length >= 1 ? <div>
                {state.products.map((product) => <div key={product.id}>
                    <div>
                        <img src={product.thumbnail} alt='productimage' />
                    </div>
                    <div>
                        <h1>
                            {product.title}
                        </h1>
                    </div>
                </div>)}
            </div> : <div><h1>No Products Found</h1></div>}
        </div>
    )
}

export default Products