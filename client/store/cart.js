import axios from "axios";

const LOAD_CART = "LOAD_CART";
const ADD_QUANTITY_TO_CART = "ADD_QUANTITY_TO_CART";
const SUBTRACT_QUANTITY_FROM_CART = "SUBTRACT_QUANTITY_FROM_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";

const _loadCart = (cartItems) => {
  return {
    type: LOAD_CART,
    cartItems,
  };
};

/* ------------ User Cart Thunk Section ------------ */

export const fetchCart = (loggedInUser) => {
  return async (dispatch) => {
    try {
      if (loggedInUser) {
        const { data: cartItems } = await axios.get(
          `/api/cart/${loggedInUser}`
        );
        dispatch(_loadCart(cartItems));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//THUNK
export const update_UserCart = (cartItem, loggedInUser, task) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.put(`/api/cart/${cartItem}`, {
        task,
      });
      dispatch(fetchCart(loggedInUser));
    } catch (error) {
      console.log(error);
    }
  };
};

//THUNK
export const addToUserCart = (productId, loggedInUser, price, productObj) => {
  return async (dispatch) => {
    try {
      const obj = { productId, loggedInUser, price, productObj };
      const { data: product } = await axios.post(`/api/cart`, obj);
      dispatch(fetchCart(loggedInUser));
    } catch (error) {
      console.log(error);
    }
  };
};

/* ------------ Guest Cart Thunk Section ------------ */

export const addToGuestCart =
  ({ id, price, imageUrl, name }) =>
  () => {
    let cartItems =
      JSON.parse(localStorage.getItem("cart")) !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

    let inCart = cartItems.filter((item) => Number(item.id) === Number(id));

    cartItems.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
      }
    });

    if (inCart.length === 0) {
      cartItems = [
        ...cartItems,
        {
          id,
          name,
          price,
          imageUrl,
          quantity: 1,
        },
      ];
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

//REDUCER
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case LOAD_CART:
      return action.cartItems;
    default:
      return state;
  }
}
