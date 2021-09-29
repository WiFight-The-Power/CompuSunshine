import axios from "axios";

//ACTION
const SET_ORDER = "SET_ORDER";
const UPDATE_ORDER = "UPDATE_ORDER";

//ACTION CREATOR
export const _setOrder = (order) => {
  return {
    type: SET_ORDER,
    order,
  };
};

export const _updateOrder = (order) => {
  return {
    type: UPDATE_ORDER,
    order,
  };
};

//THUNK

export const fetchOrder = (userId) => {
  return async (dispatch) => {
    try {
      const { data: order } = await axios.get(`/api/orders/${userId}`);
      dispatch(_setOrder(order));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateOrder = (order) => {
  return async (dispatch) => {
    try {
      const orderId = order.id ? order.id : 123445678; //12345678 signifiys a guest user
      const { data: fulfilled } = await axios.put(
        `/api/orders/${orderId}`,
        order
      );
      dispatch(_updateOrder(fulfilled));
    } catch (error) {
      console.log(error);
    }
  };
};

//REDUCER
export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.order;
    case UPDATE_ORDER:
      return action.order;
    default:
      return state;
  }
}
