import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../features/cart/reducer'
import {productsReducer} from './products';


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

