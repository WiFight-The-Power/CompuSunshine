import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../store/product";
import { setProduct } from "../store/product";
import { Link } from "react-router-dom";
import { addToGuestCart, addToUserCart } from "../store/cart";

export class SingleProduct extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  handleClick() {
    const { product } = this.props;
    const num = Math.round(product.price);

    if (this.props.isLoggedIn) {
      let userId = this.props.loggedInUser;
      this.props.add_UserProduct(product.id, userId, num, this.props.product);
    } else {
      this.props.add_GuestProduct(product);
    }
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <img src={product.imageUrl} />
        <h3>{product.name}</h3>
        <h4>${product.price / 100}</h4>
        <h5>{product.brand}</h5>
        <h5>{product.category}</h5>
        <p>{product.description}</p>

        <button onClick={this.handleClick}>Add to Cart</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  product: state.product,
  isLoggedIn: !!state.auth.id,
  loggedInUser: state.auth.id,
});

const mapDispatch = (dispatch) => ({
  getProduct: (id) => dispatch(fetchProduct(id)),
  add_UserProduct: (id, loggedInUser, price, productObj) =>
    dispatch(addToUserCart(id, loggedInUser, price, productObj)),
  add_GuestProduct: (product) => dispatch(addToGuestCart(product)),
});

export default connect(mapState, mapDispatch)(SingleProduct);
