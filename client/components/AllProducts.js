import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/products'
import { Link } from 'react-router-dom'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const { products } = this.props

    return (
      <div>
        <h2>All Products</h2>
        <div>
          {products.length ? (
            products.map(product => (
              <div key={product.id}>
                <img src={product.imageUrl} />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>{product.description}</p>
              </div>
            ))
          ) : (
            <h3>Out of stock!</h3>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products,
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
})

export default connect(mapState, mapDispatch)(AllProducts)
