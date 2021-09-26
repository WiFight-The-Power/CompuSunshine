import React, { useEffect, useState } from "react";
import CartRow from "./utils/CartRow";
import { connect } from "react-redux";
import { fetchCart, fetch_GuestCart } from "../store/cart";

function Cart({ cart, isLoggedIn, loggedInUser, getCart, guestCart, getGuestCart, state }) {
  console.log(loggedInUser, "what we need ");
  let rowView;

  useEffect(() => {
    try {
      getCart(loggedInUser);
      getGuestCart();
    } catch (error) {
      console.log(error);
    }
  }, [loggedInUser]);

  if (isLoggedIn) {
    if (!cart) {
      rowView = <h1 style={{ textAlign: "center" }}>Cart is Empty, ya bum!</h1>;
    } else {
      /* Added sorted list to keep from element reshifting after rerender! */
      let sortedCart = cart.sort((itemA, itemB) => itemA.id - itemB.id);
      rowView = sortedCart.map(item => (
        <CartRow
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
          loggedInUser={loggedInUser}
          guestUser={false}
        />
      ));
    }
  } else {
    console.log("on guest!!!!!!");
    // const guestCart = JSON.parse(localStorage.getItem("cart"));
    console.log(guestCart, "hey");
    rowView =
      guestCart === null ? (
        <h1 style={{ textAlign: "center" }}>Cart is Empty, ya bum!</h1>
      ) : (
        guestCart.map(item => (
          <CartRow
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            loggedInUser={loggedInUser}
            guestUser={true}
          />
        ))
      );
  }

  return (
    <div>
      {console.log(cart, "we on view")}
      <table style={{ width: "1200px", marginLeft: "60px" }}>
        <thead>
          <tr>
            <th className="product-thumbnail">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
            <th className="product-remove">Remove</th>
          </tr>
        </thead>

        <tbody>{rowView}</tbody>
      </table>
    </div>
  );
}

const mapState = state => ({
  cart: state.cart.userCart,
  guestCart: state.cart.guestCart,
  isLoggedIn: !!state.auth.id,
  loggedInUser: state.auth.id,
  state: state,
});

const mapDispatch = dispatch => ({
  getCart: loggedInUser => dispatch(fetchCart(loggedInUser)),
  getGuestCart: () => dispatch(fetch_GuestCart()),
});

export default connect(mapState, mapDispatch)(Cart);
