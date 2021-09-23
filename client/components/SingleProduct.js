import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../store/product'
import { Link } from 'react-router-dom'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId)
  }

  render() {
    const { product } = this.props

    return (
      <div>
        <img src={product.imageUrl} />
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <h5>{product.brand}</h5>
        <h5>{product.category}</h5>
        <p>{product.description}</p>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.product,
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(fetchProduct(id)),
})

export default connect(mapState, mapDispatch)(SingleProduct)
