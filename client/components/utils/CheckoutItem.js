import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

function CheckoutItem({ product, cartConflicts, cart }) {
  const [error, setError] = useState("");

  useEffect(() => {
    let conflict = cartConflicts.filter(
      (id) => Number(id) === Number(product.id)
    );

    if (conflict.includes(Number(product.id))) {
      setError("Cannot fullfill: insufficient stock", error);
    } else {
      setError(false);
    }
  }, [cartConflicts, cart]);

  return (
    <div style={{ display: "flex" }} key={product.id}>
      <div>
        <img className="product-thumbnail" src={product.imageUrl} />
        <h4>{product.name}</h4>
        <h5>Price Per Unit: ${product.price / 100}</h5>
        <h5>Quantity: {product.quantity}</h5>
        <h5>Sub-total: ${(product.price * product.quantity) / 100}</h5>
      </div>
      {error && (
        <Alert style={{ height: "fit-content" }} variant="danger">
          {error}
        </Alert>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartConflicts: state.cart.cartConflicts,
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CheckoutItem);
