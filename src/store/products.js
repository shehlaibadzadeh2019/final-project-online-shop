// import {getProductsAPI, getSingleProductAPI} from '../API';

// Actions types
const SET_PRODUCTS = 'SET_PRODUCTS'; 
const ADD_PRODUCTS = 'ADD_PRODUCTS'; 
const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';


// Reducer

const defState = {
    productsList: [],
    singleProduct: {}
};

export function productsReducer(store = defState, {type, payload}) {
    
    switch(type) {
        case SET_PRODUCTS:
            return {
                ...store,
                productsList: payload
            };
        case ADD_PRODUCTS:
            return {
                ...store,
                productsList: [...store.productsList, ...payload]
            };
        case CLEAR_PRODUCTS:
            return {
                ...store, 
                productsList: []
            };
        case SET_SINGLE_PRODUCT:
            return {
                ...store,
                singleProduct: payload
            }
        default:
            return store;
    }
};


// Action creators

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});
export const addProducts = payload => ({
    type: ADD_PRODUCTS,
    payload
});
export const clearProducts = () => ({
    type: CLEAR_PRODUCTS
});

export const setSingleProduct = payload => ({
    type: SET_SINGLE_PRODUCT,
    payload
});

// Middlewares
export const getProducts = (endpoint = '', filters = {}) => async (dispatch) => {
    try {
        const res = await fetch(` https://online-shoppers-back-2.herokuapp.com/api/products/type?type=${endpoint}`, {
            method: 'GET',
            
        }).then(r=>r.json());

        

        dispatch(setProducts(res));
    } catch(e) {
        alert(e.message || e);
    }
}

export const getSingleProduct = id => async (dispatch) => {
    try {
        const res = await fetch(`  https://online-shoppers-back-2.herokuapp.com/api/product/?id=${id}`, {
            method: 'GET'
        }).then(r=>r.json());

        dispatch(setSingleProduct(res));
    } catch(e) {
        alert(e.message || e);
    }
}


