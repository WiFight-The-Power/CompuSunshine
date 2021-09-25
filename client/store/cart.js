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

//THUNK
// export const getCart = (productId) => {
//   return async (dispatch) => {
//     try {
//       const { data: product } = await axios.get(`/api/products/${productId}`);
//       dispatch(_setProduct(product));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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

//THUNK
export const addToUserCart = (productId, loggedInUser, price, productObj) => {
  return async (dispatch) => {
    try {
      console.log("on meeeee");
      const obj = { productId, loggedInUser, price, productObj };
      console.log(productId, "hey");
      const { data: product } = await axios.post(`/api/cart`, obj);
      console.log(product);
      dispatch(fetchCart(loggedInUser));
    } catch (error) {
      console.log(error);
    }
  };
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
