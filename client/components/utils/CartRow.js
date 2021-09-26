import React from "react";
import { connect } from "react-redux";
import { update_UserCart, update_GuestCart } from "../../store/cart";

function CartRow({
  id,
  name,
  price,
  imageUrl,
  quantity,
  guestUser,
  updateUserCart,
  updateGuestCart,
  loggedInUser,
}) {
  const handleClick = (task) => {
    if (!guestUser) {
      console.log(id, loggedInUser, task);
      updateUserCart(id, loggedInUser, task);
    } else if (guestUser) {
      updateGuestCart(id, task);
    }
  };

  return (
    <tr>
      {console.log(imageUrl)}
      <td>
        <h3>{name}</h3>
        <img src={imageUrl} alt="wassGud!" />
      </td>
      <td>${price}</td>
      <td>
        <button onClick={() => handleClick("subtract")}>-</button>
        {quantity}
        <button onClick={() => handleClick("add")}>+</button>
      </td>
      <td>${quantity * price}</td>
      <td>
        <button onClick={() => handleClick("remove")}>X delete</button>
      </td>
    </tr>
  );
}

const mapDispatch = (dispatch) => ({
  updateUserCart: (cartId, loggedInUser, task) =>
    dispatch(update_UserCart(cartId, loggedInUser, task)),
  updateGuestCart: (itemId, task) => dispatch(update_GuestCart(itemId, task)),
});

export default connect(null, mapDispatch)(CartRow);
