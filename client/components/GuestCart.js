import React, { Component } from "react";
import CartRow from "./utils/CartRow";
import { connect } from "react-redux";

class GuestCart extends Component {
  render() {
    const guestCart = JSON.parse(localStorage.getItem("cart"));

    const rowView = guestCart.map((item) => (
      <CartRow
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
        quantity={item.quantity}
      />
    ));

    return (
      <div>
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
}
const mapState = (state) => ({
  cart: state.guestCart,
});

const mapDispatch = (dispatch) => ({
  getCart: () => dispatch(cartProducts()),
});

export default connect(mapState, mapDispatch)(GuestCart);
