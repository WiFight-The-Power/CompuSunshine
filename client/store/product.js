import axios from "axios";

//ACTION
const SET_PRODUCT = "SET_PRODUCT";
// const ADD_PRODUCT = "ADD_PRODUCT";

//ACTION CREATOR
export const _setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product,
  };
};

//THUNK
export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${productId}`);
      dispatch(_setProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
};

//THUNK
export const setProduct = (productId, loggedInUser, price) => {
  return async (dispatch) => {
    try {
      const obj = { productId, loggedInUser, price };
      const { data: product } = await axios.post(`/api/products/${1}`, obj);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
export default function productReducer(state = {}, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
