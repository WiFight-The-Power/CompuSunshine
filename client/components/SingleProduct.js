import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../store/product";
import { setProduct } from "../store/product";
import { Link } from "react-router-dom";
import { addToGuestCart, addToUserCart } from "../store/cart";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";


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

    injectStyle();

    toast("Added to cart!");
    

    if (this.props.isLoggedIn) {
      let userId = this.props.loggedInUser;
      this.props.add_UserProduct(product.id, userId, product.price, this.props.product);
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
        {product.quantity !== 0 ? (
          <button onClick={this.handleClick}>Add to Cart</button>
        ) : (
          "Out of Stock!"
        )}
        <ToastContainer />
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
