import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import CheckoutItem from "./utils/CheckoutItem";
import { updateProductCount } from "../store/products";
import { updateOrder, fetchOrder } from "../store/order";
import {
  checkInventory,
  resetCanSubmit,
  resetCartConflicts,
  fetchCart,
  fetch_GuestCart,
} from "../store/cart";

function Checkout({
  auth,
  history,
  order,
  reset_CartConflicts,
  reset_CanSubmit,
  cartInfo,
  getOrder,
  getCart,
  toUpdateOrder,
  check_Inventory,
  canSubmit,
  update_ProductCount,
  getGuestCart,
}) {
  let cart = cartInfo ? (auth.id ? cartInfo.userCart : cartInfo.guestCart) : [];
  const [formData, setFormData] = useState(auth);

  useEffect(() => {
    checkAvailabily();
    reset_CartConflicts();
    getCart(auth.id);
    getGuestCart();
    if (auth.id) getOrder(auth.id);
  }, [auth]);

  useEffect(() => {
    reset_CanSubmit();
    checkAvailabily();
  }, [cart]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (canSubmit) {
      toUpdateOrder({ ...order, status: "fullfilled" });
      for (let index = 0; index < cart.length; index++) {
        const orderItem = cart[index];
        const productId = auth.id ? orderItem.productId : orderItem.id;
        update_ProductCount(productId, orderItem.quantity);
      }
    }
    checkAvailabily();
    reset_CanSubmit();
  };

  const checkAvailabily = () => {
    if (cart.length > 0) {
      for (let index = 0; index < cart.length; index++) {
        const orderItem = cart[index];
        const productId = auth.id ? orderItem.productId : orderItem.id;
        check_Inventory(productId, orderItem.quantity, orderItem.id);
      }
    }
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const itemSubtotal = cart.reduce(function (prev, curr) {
    return prev + (curr.quantity * curr.price) / 100;
  }, 0);
  const taxRate = 0.09;
  const tax = (itemSubtotal * taxRate).toFixed(2);

  return (
    <div style={{ width: "400px", margin: "0 80px" }}>
      <h2>Order Summary</h2>

      {auth.id
        ? cartInfo.userCart.map((product) => <CheckoutItem product={product} />)
        : cartInfo.guestCart.map((product) => (
            <CheckoutItem product={product} />
          ))}
      <table className="checkout">
        <tbody>
          <tr>
            <th>Item Subtotal: </th>
            <th>${itemSubtotal.toFixed(2)}</th>
          </tr>
          <tr>
            <th>Shipping: </th>
            <th>$0.00</th>
          </tr>
          <tr>
            <th>Tax: </th>
            <th>${tax}</th>
          </tr>
          <tr>
            <th>Total: </th>
            <th>${(Number(itemSubtotal) + Number(tax)).toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        id="checkout-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="first_name">
          <h1>First Name:</h1>
        </label>
        <input
          name="first_name"
          onChange={handleChange}
          value={formData.first_name}
          required
        ></input>

        <label htmlFor="last_name">
          <h1>Last Name:</h1>
        </label>
        <input
          name="last_name"
          onChange={handleChange}
          value={formData.last_name}
          required
        ></input>

        <label htmlFor="email">
          <h1>Email:</h1>
        </label>
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        ></input>

        <label htmlFor="address_1">
          <h1>Address Line 1:</h1>
        </label>
        <input
          name="address_1"
          onChange={handleChange}
          value={formData.address_1}
          required
        ></input>

        <label htmlFor="address_2">
          <h1>Address Line 2:</h1>
        </label>
        <input
          name="address_2"
          onChange={handleChange}
          value={formData.address_2}
          required
        ></input>

        <label htmlFor="city">
          <h1>City:</h1>
        </label>
        <input
          name="city"
          onChange={handleChange}
          value={formData.city}
          required
        ></input>

        <label htmlFor="state">
          <h1>State:</h1>
        </label>
        <input
          name="state"
          onChange={handleChange}
          value={formData.state}
          required
        ></input>

        <label htmlFor="zipcode">
          <h1>Zipcode:</h1>
        </label>
        <input
          name="zipcode"
          onChange={handleChange}
          value={formData.zipcode}
          required
        ></input>

        <label htmlFor="phone">
          <h1>Phone:</h1>
        </label>
        <input
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          required
        ></input>

        <button type="submit">Submit</button>
        <button type="cancel" onClick={() => history.push("/cart")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    cartInfo: state.cart,
    order: state.order,
    canSubmit: state.cart.canSubmit,
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  toUpdateOrder: (order) => dispatch(updateOrder(order)),
  getOrder: (userId) => dispatch(fetchOrder(userId)),
  check_Inventory: (productId, cartItemAmount, cartItemId) =>
    dispatch(checkInventory(productId, cartItemAmount, cartItemId)),
  update_ProductCount: (productId, cartItemAmount) =>
    dispatch(updateProductCount(productId, cartItemAmount)),
  reset_CanSubmit: () => dispatch(resetCanSubmit()),
  reset_CartConflicts: () => dispatch(resetCartConflicts()),
  getCart: (loggedInUser) => dispatch(fetchCart(loggedInUser)),
  getGuestCart: () => dispatch(fetch_GuestCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
