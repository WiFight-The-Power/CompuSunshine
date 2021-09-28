import axios from "axios";

const LOAD_CART = "LOAD_CART";
const ADD_QUANTITY_TO_CART = "ADD_QUANTITY_TO_CART";
const SUBTRACT_QUANTITY_FROM_CART = "SUBTRACT_QUANTITY_FROM_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";
const LOAD_GUEST_CART = "LOAD_GUEST_CART";
const ADD_INVENTORY_CONFLICT = "ADD_INVENTORY_CONFLICT";
const CAN_SUBMIT = "CAN_SUBMIT";
const RESET_CART_CONFLICTS = "RESET_CART_CONFLICTS";

let initialState = {
  userCart: [],
  guestCart: [],
  cartConflicts: [],
  canSubmit: true,
};

const _loadGuestCart = (cartItems) => {
  return {
    type: LOAD_GUEST_CART,
    cartItems,
  };
};

const _loadCart = (cartItems) => {
  return {
    type: LOAD_CART,
    cartItems,
  };
};

export const _addInventoryConflict = (cartItemId) => {
  return {
    type: ADD_INVENTORY_CONFLICT,
    cartItemId,
  };
};

export const _setCanSubmit = (boolean) => {
  return {
    type: CAN_SUBMIT,
    boolean,
  };
};

export const _resetConflicts = () => {
  return {
    type: RESET_CART_CONFLICTS,
    payload: [],
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
      const obj = {
        productId,
        loggedInUser,
        price,
        productObj,
        addedFromGuestCart: true,
      };
      const { data: product } = await axios.post(`/api/cart/`, obj);
      dispatch(fetchCart(loggedInUser));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToUserCartFromGuest = (
  productId,
  loggedInUser,
  price,
  productObj
) => {
  return async (dispatch) => {
    try {
      console.log("adding");
      const obj = {
        productId,
        loggedInUser,
        price,
        productObj,
        addedFromGuestCart: true,
      };
      console.log(obj.productId, loggedInUser, "should work");
      const { data: product } = await axios.post(
        `/api/cart/addFromGuestUserCart`,
        obj
      );

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

export const fetch_GuestCart = () => {
  return async (dispatch) => {
    try {
      let cartItems =
        JSON.parse(localStorage.getItem("cart")) !== null
          ? JSON.parse(localStorage.getItem("cart"))
          : [];
      dispatch(_loadGuestCart(cartItems));
    } catch (error) {
      console.log(error);
    }
  };
};

export const update_GuestCart = (itemId, task) => {
  return (dispatch) => {
    let cartItems =
      JSON.parse(localStorage.getItem("cart")) !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

    cartItems.map((item) => {
      if (Number(item.id) === Number(itemId)) {
        if (task === "subtract" && item.quantity > 1) {
          item.quantity -= 1;
          return item;
        }
        if (task === "add") {
          item.quantity += 1;
          return item;
        }
        if (task === "remove") {
          cartItems = cartItems.filter(
            (product) => Number(product.id) !== Number(itemId)
          );
        }
      } else {
        return item;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch(fetch_GuestCart(cartItems));
  };
};

/* ------------ Guest Cart + User Cart Thunk Section ------------ */
export const checkInventory = (productId, cartItemAmount, cartItemId) => {
  return async (dispatch) => {
    try {
      console.log("should be working");
      const obj = { cartItemAmount };
      const { data: canPurchase } = await axios.put(
        `/api/products/checkInventory/${productId}`,
        obj
      );

      if (!canPurchase) {
        dispatch(_setCanSubmit(false));
        dispatch(_addInventoryConflict(cartItemId));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetCanSubmit = () => {
  return (dispatch) => {
    dispatch(_setCanSubmit(true));
    dispatch(_resetConflicts());
  };
};

export const resetCartConflicts = () => {
  return (dispatch) => {
    dispatch(_resetConflicts());
  };
};

//REDUCER
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        userCart: action.cartItems,
      };
    case LOAD_GUEST_CART:
      return {
        ...state,
        guestCart: action.cartItems,
      };
    case ADD_INVENTORY_CONFLICT:
      return {
        ...state,
        cartConflicts: [...state.cartConflicts, action.cartItemId],
      };
    case CAN_SUBMIT:
      return {
        ...state,
        canSubmit: action.boolean,
      };
    case RESET_CART_CONFLICTS:
      return {
        ...state,
        cartConflicts: action.payload,
      };
    default:
      return state;
  }
}

// let initialFormState = {
//   first_name: auth.first_name || "",
//   last_name: auth.last_name || "",
//   email: auth.email || "",
//   address_1: auth.address_1 || "",
//   address_2: auth.address_2 || "",
//   phone: auth.phone || "",
//   city: auth.city || "",
//   state: auth.state || "",
//   zipcode: auth.zipcode || "",
// };
