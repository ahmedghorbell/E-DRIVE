import { FAIL_PRODUCT, LOAD_PRODUCT, SUCCESS_PRODUCT } from "../actiontypes/ActionTypes";


  // InitialState
  const initialState = {
    listProducts: [],
    errors: null,
    load: false,
};

// Pure function
const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT:
        return {...state, load: true };
        case SUCCESS_PRODUCT:
        return {...state, load: false, listProducts: payload };
        case FAIL_PRODUCT:
        return {...state, errors: payload.errors, load: false };
    default:
        return state;
    }
};

export default ProductReducer

