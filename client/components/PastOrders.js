import React from "react";
import { connect } from "react-redux";

class PastOrders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      console.log("auth", this.props.auth);
      console.log("order", this.props.order);
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    order: state.order //this only gets 1 order at a time... need to implement new thunk to get all orders from certain user
  };
};



export default connect(mapStateToProps)(PastOrders);
