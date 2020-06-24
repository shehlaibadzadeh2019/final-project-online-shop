import React from 'react'

export default function RemoveButton(props) {
    return <button className="products-btn-add" onClick={(e) => {
        e.preventDefault();
        props.removeFromCart(props.cartItem)
    }}>Remove</button>
}