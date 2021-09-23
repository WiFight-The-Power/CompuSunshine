import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../store/product";
import { setProduct } from "../store/product";
import { Link } from "react-router-dom";

export class SingleProduct extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  handleClick() {
    let userId = null;
    const { product } = this.props;
    const num = Math.round(product.price);
    // console.log(num)
    this.props.addProduct(product.id, userId, num);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <img src={product.imageUrl} />
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
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
});

const mapDispatch = (dispatch) => ({
  getProduct: (id) => dispatch(fetchProduct(id)),
  addProduct: (id, loggedInUser, price) =>
    dispatch(setProduct(id, loggedInUser, price)),
});

export default connect(mapState, mapDispatch)(SingleProduct);
