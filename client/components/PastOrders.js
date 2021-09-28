import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../store/orders";

class PastOrders extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.auth.id);
  }

  render() {
    return (
      <div>
        <h2>Past Orders</h2>
        {this.props.orders.map(order => console.log(order))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
  getOrders: userId => dispatch(fetchOrders(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PastOrders);
