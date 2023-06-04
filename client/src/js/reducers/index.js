import AuthReducer from "./AuthReducer"
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import UsersReducer from "./UsersReducer"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({AuthReducer, UsersReducer ,ProductReducer, CartReducer})

export default rootReducer