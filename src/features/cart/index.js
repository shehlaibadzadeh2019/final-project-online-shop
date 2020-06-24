import React from 'react'
import { connect } from 'react-redux'


function Cart(props) {

    return <div className="cart-context row">
        <div className="cart-head col-lg-12 col-md-12 col-12  ">

            <span className="c-white col-lg-1 col-md-1 col-1">Image</span>
            <span className="hd-name col-lg-4 col-md-4 col-4">Name</span>
            <span className="hd-brand col-lg-2 col-md-2 col-2">Brand</span>
            <span className="hd-price col-lg-1 col-md-1 col-1">Price</span>
            <span className="hd-quantitycol-lg-3 col-md-3 col-3">Quantity </span>
            <span className="c-white col-lg-3 col-md-3 col-3"> Remove</span>
        </div>
        <div className="cart-items">
            {
                props.cart.map((item) => (
                    <div className="cart-item align-items-center  justify-content-between col-lg-12 col-md-12 col-12">
                        <img className="cart-img col-lg-1 col-md-1 col-1"
                            src={`${item.image[0]}`}
                        />

                        <p className=" col-lg-3 col-md-3 col-3 cart-name">{item.name}</p>
                        <p className=" col-lg-2 col-md-2 col-2 cart-brand">{item.brand}</p>
                        <p className="col-lg-1 col-md-1 col-1 cart-price">${item.price}</p>

                        <div className=" col-lg-3 col-md-3 col-3">
                            <div className='btn-quantity'>
                                <button className="btn-ar"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.addToCart(item);
                                    }}
                                >+</button>
                                <span className="quantity">{item.quantity}</span>
                                <button className="btn-ar"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.removeFromCart(item)
                                    }}
                                >-</button>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1">
                            <button className="remove-btn "
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.removeAllFromCart(item);
                                }}
                            >X</button>
                        </div>
                    </div>

                ))
            }
        </div>
    </div >

}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)