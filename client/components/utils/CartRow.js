import React from "react";

function CartRow({ id, name, price, imageUrl, quantity }) {
  return (
    <tr>
      <td>
        <h3>{name}</h3>
        <img src={imageUrl} alt="wassGud!" />
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>${quantity * price}</td>
      <td>X delete</td>
    </tr>
  );
}

export default CartRow;
