import React from 'react'

export default function AddButton(props) {
    return <button className="products-btn-add" onClick={(e) =>{
        e.preventDefault();
        props.addToCart(props.product)
    } }>Add to Cart</button>
}