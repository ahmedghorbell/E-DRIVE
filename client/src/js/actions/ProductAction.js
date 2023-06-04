import axios from "axios";
import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  SUCCESS_PRODUCT,
} from "../actiontypes/ActionTypes";

// Get all product
export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let products = await axios.get("/api/products/all_products");
    dispatch({ type: SUCCESS_PRODUCT, payload: products.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// Add new product 
export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
      await axios.post("/api/products/add_product", newProduct);
      dispatch(getProducts());
  } catch (error) {
  dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
  };

// Delete product
export const deleteProduct = (_id) => async (dispatch) => {
  try {
    await axios.delete(`/api/products/delete_product/${_id}`);
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// Update product
export const updateProduct = (_id, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/products/update_product/${_id}`, newProduct);
    dispatch(getProductById(_id));
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// Get product by id
export const getProductById = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let product = await axios.get(`/api/products/get_product/${_id}`);
    dispatch({ type: SUCCESS_PRODUCT, payload: product.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// Get product by category
export const getProductByCategory = (category) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let product = await axios.get(`/api/products/get_products/${category}`);
    dispatch({ type: SUCCESS_PRODUCT, payload: product.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};


