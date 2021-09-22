import axios from "axios"

//ACTION
const SET_PRODUCT = "SET_PRODUCT";

//ACTION CREATOR
export const _setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        product
    }
}

//THUNK
export const fetchProduct = (id) => {
    return async (dispatch) => {
        try {
            const {data: product} = await axios.get(`/api/products/${id}`);
            dispatch(_setProduct(product));
        } catch (error) {
            console.log(error);
        }
    }
}

//REDUCER
export default function productReducer(state = {}, action) {
    switch(action.type) {
        case SET_PRODUCT:
            return action.product;
        default: 
            return state;
    }
}
