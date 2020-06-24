import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/products';
import './productListPage.sass'
import ProductsListItem from './productListItem';
import FilterAdult from '../../features/Filter/FilterAdult/index';



function ProductListPage(props) {
    const endpoint = props.location.pathname.substr(2);

    useEffect(() => {
        props.getProducts(endpoint);
    }, [props.location.pathname])

    return (
        <div className='productss'>
            <FilterAdult
            // getFilteredProducts={props.getProducts.bind(null, endpoint)}
            />

            <div className='product-listing'>
                {props.products.map((item) => (

                    <ProductsListItem data={item}
                        addToCart={()=> props.addToCart(item)}
                        removeFromCart={props.removeFromCart}
                        cartItem={props.cart.filter(cartItem => cartItem.id === item.id)[0]} />)

                )}

            </div>
        </div>
    )
};



function mapStateToProps(state) {
    return {
        products: state.products.productsList,
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
        getProducts: (endpoint = '', filters = {}) => dispatch(getProducts(endpoint, filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);