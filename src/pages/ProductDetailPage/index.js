import React, {useEffect} from 'react';
import {getSingleProduct} from '../../store/products';
import {connect} from 'react-redux';
import './detail.sass'

const mapStateToProps = store => ({
    singleProductt: store.products.singleProduct,
})

function ProductDetail (props) {
    const id = props.location.pathname.substr(10);

    useEffect(()=>{
        props.getSingleProduct(id);
    },[props.location.pathname])

    return (
        <div className='products-detail'>
            <img className="products-detail-img" title={props.singleProductt.brand}
                height={200} width={155}
                src={`${props.singleProductt.image}`} />
            
            <div className="product-detail-text">
                <div className="item-no"><span className="detail-headers">Item No:</span>{props.singleProductt.itemNo}</div>
                <div className="product-detail-name"><span className="detail-headers">Name:</span>{props.singleProductt.name}</div>
                <div className="product-detail-brand"><span className="detail-headers">Brand:</span>{props.singleProductt.brand}</div>
                <div className="product-detail-description"><span className="detail-headers">Description:</span>{props.singleProductt.description}</div>
                <div className="products-detail-price"><span className="detail-headers">Price:</span>${props.singleProductt.price}</div>
               
            </div>
        </div>
    )
};

export default connect(mapStateToProps,{getSingleProduct})(ProductDetail);