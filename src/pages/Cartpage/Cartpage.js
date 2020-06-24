import React from 'react'
import Cart from '../../features/cart'
import './Cartpage.sass'

export function Cartpage(props) {
    return <div className='cart'>
        <div className="container">
            <Cart />
        </div>
    </div>
}

export default Cartpage;