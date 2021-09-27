import React from "react";
import { connect } from "react-redux";

import {
  fetchAllProducts,
  fetchSingleProduct,
  setSingleProduct,
  updateProduct,
} from "../store/adminproducts";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      category: "",
      price: 0,
      imageUrl: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
    console.log("yurrrpppp", this.state);
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.product.name !== this.props.product.name) {
      this.setState({
        name: this.props.product.name,
        brand: this.props.product.brand,
        category: this.props.product.category,
        price: this.props.product.price,
        imageUrl: this.props.product.imageUrl,
        description: this.props.product.description,
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateProduct(this.props.match.params.productId, {
      ...this.state,
    });
  }

  render() {
    return (
      <form id="edit-product" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Product Name: </label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="brand">Brand: </label>
          <input
            name="brand"
            value={this.state.brand}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="category">Category: </label>
          <input
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="price">Price (in cents): </label>
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="imageUrl">Image </label>
          <input
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          ></input>
        </div>

        <button type="submit">Edit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products.singleProduct,
    allProducts: state.products.allProducts,
    // singleProduct: state.singleProduct,
    state: state,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    getAllProducts: () => dispatch(fetchAllProducts()),
    clearProduct: () => {
      dispatch(setSingleProduct({}));
    },
    updateProduct: (id, product) =>
      dispatch(updateProduct(id, product, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
