import axios from "axios";

const LOAD_CART = "LOAD_CART";
const ADD_QUANTITY_TO_CART = "ADD_QUANTITY_TO_CART";
const SUBTRACT_QUANTITY_FROM_CART = "SUBTRACT_QUANTITY_FROM_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";

const _addToCart = (cartItems) => ({
  type: ADD_TO_CART,
  cartItems,
});

const _loadCart = (cart) => {
  return {
    type: LOAD_CART,
    cart,
  };
};

const _addQuantityToCart = (productId) => {
  return {
    type: ADD_QUANTITY_TO_CART,
    productId,
  };
};

const _subtractQuantityFromCart = (productId) => {
  return {
    type: SUBTRACT_QUANTITY_FROM_CART,
    productId,
  };
};

const _deleteFromCart = (productId) => {
  return {
    type: DELETE_FROM_CART,
    productId,
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

export const addToCart =
  ({ id, price, imageUrl, name }) =>
  (dispatch) => {
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

    dispatch(_addToCart(cartItems));
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // console.log(cartItems);
  };

//REDUCER
export default function guestCartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cartItems;
    default:
      return state;
  }
}
