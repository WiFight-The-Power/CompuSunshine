import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, fetchAllProducts } from '../store/adminproducts';

class AdminProducts extends React.Component {
  async componentDidMount(){
    await this.props.loadAllProducts();
  }
  render(){
    return(
      <div>
          {this.props.allProducts.map((product) => {
            return(
            <div key={product.id}>
              <Link to={`/admin/editProducts/${product.id}`}>{product.name}</Link>
              <button type="button" onClick={() => this.props.deleteProduct(product.id)}>Delete</button>
            </div>
            )
          })}
      </div>
    )
  }
}

//mapStateToProps
const mapStateToProps = state => {
  return {
    allProducts: state.allProducts,
  }
}
//mapDispatchToProps
const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadAllProducts: () => {
      dispatch(fetchAllProducts());
    },
    deleteProduct: (productId) => {
      dispatch(deleteProduct(productId, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);