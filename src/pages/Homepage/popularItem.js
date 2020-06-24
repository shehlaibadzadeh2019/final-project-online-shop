import React from 'react';
import {Link} from 'react-router-dom'

export default function popularItem(props) {
    // const thisItemInCart = props.cart.filter(item => item.id === props.data.id)[0]
    return (

        <div className="products-list">
            <div className="container">
                <div className="d-flex flex-row row justify-content-around products-list-items">
                    <div className="products-list-item">
                        <Link to={`/Products/${ props.data.id }`} ><a href="" className="product-list-item-a col-lg-12 col-md-4 col-12">
                            <img className="products-img" title={props.data.brand}
                                height={200} width={155}
                                src={`${props.data.image[0]}`} />
                            <div className="products-price-btn">
                                <div className="products-price">${props.data.price}</div>
                            </div>
                                
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}