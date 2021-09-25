import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../store/product";
import { addToGuestCart, addToUserCart } from "../../store/cart";

function CartRow({ id, name, price, imageUrl, quantity, guestUser }) {
  return (
    <tr>
      <td>
        <h3>{name}</h3>
        <img src={imageUrl} alt="wassGud!" />
      </td>
      <td>${price}</td>
      <td>
        <button>-</button>
        {quantity}
        <button>+</button>
      </td>
      <td>${quantity * price}</td>
      <td>X delete</td>
    </tr>
  );
}

const mapState = (state) => ({
  isLoggedIn: !!state.auth.id,
  loggedInUser: state.auth.id,
});

const mapDispatch = (dispatch) => ({
  getProduct: (id) => dispatch(fetchProduct(id)),
  add_UserProduct: (id, loggedInUser, price, productObj) =>
    dispatch(addToUserCart(id, loggedInUser, price, productObj)),
  add_GuestProduct: (product) => dispatch(addToGuestCart(product)),
});

export default connect(mapState, mapDispatch)(CartRow);
