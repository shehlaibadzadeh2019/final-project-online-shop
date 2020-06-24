import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../store/products';
import popularItem from './popularItem'


const mapStateToProps = store => ({
    products: store.products.productsList,
})

function Popular (props) {

    useEffect(()=>{
        props.getProducts();
    },[])

    return (
        <div className='productss'>
            
            <div className='product-listing'>
            {props.products.map((item)=> (
                
                <popularItem data={item}
                />
            )
                
            )}
            </div>
        </div>
    )
};

export default connect(mapStateToProps,{getProducts})(Popular);