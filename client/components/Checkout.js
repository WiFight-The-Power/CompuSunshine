import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateOrder, fetchOrder} from '../store/order';

class Checkout extends React.Component {
    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            address_1: "",
            address_2: "",
            phone: "",
            city: "",
            state: "",
            zipcode: "",
            itemSubtotal: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const user = this.props.auth;
        this.props.getOrder(user.id);

        this.setState({
          first_name: user.first_name || "",
          last_name: user.last_name || "",
          email: user.email || "",
          address_1: user.address_1 || "",
          address_2: user.address_2 || "",
          phone: user.phone || "",
          city: user.city || "",
          state: user.state || "",
          zipcode: user.zipcode || "",
          itemSubtotal: this.props.cart.reduce(function (prev, curr) {
            return prev + (curr.quantity * curr.price / 100)
        }, 0)
        });
      }
    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.toUpdateOrder({...this.props.order, status: "fullfilled"});
    }

    render() {
        console.log("cart", this.props.cart);
        const {first_name, last_name, email, address_1, address_2, phone, city, state, zipcode, itemSubtotal} = this.state;
        const taxRate = 0.09;
        const tax = (itemSubtotal * taxRate).toFixed(2);
        console.log()

        return (
            <div>
                <h2>Order Summary</h2>
                <table>
                    <tr>
                        <th>Item Subtotal</th>
                        <th>Shipping</th>
                        <th>Tax</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <th>${itemSubtotal}</th>
                        <th>$0.00</th>
                        <th>${tax}</th>
                        <th>${Number(itemSubtotal) + Number(tax)}</th>
                    </tr>
                </table>
                <form id="checkout-form" onSubmit={this.handleSubmit}>
                <label htmlFor="first_name"><h1>Fist Name:</h1></label>
                <input name="first_name" onChange={this.handleChange} value={first_name}></input>

                <label htmlFor="last_name"><h1>Last Name:</h1></label>
                <input name="last_name" onChange={this.handleChange} value={last_name}></input>

                <label htmlFor="email"><h1>Email:</h1></label>
                <input name="email" onChange={this.handleChange} value={email}></input>

                <label htmlFor="address_1"><h1>Address Line 1:</h1></label>
                <input name="address_1" onChange={this.handleChange} value={address_1}></input>

                <label htmlFor="address_2"><h1>Address Line 2:</h1></label>
                <input name="address_2" onChange={this.handleChange} value={address_2}></input>

                <label htmlFor="city"><h1>City :</h1></label>
                <input name="city" onChange={this.handleChange} value={city}></input>

                <label htmlFor="state"><h1>State:</h1></label>
                <input name="state" onChange={this.handleChange} value={state}></input>

                <label htmlFor="zipcode"><h1>Zipcode:</h1></label>
                <input name="zipcode" onChange={this.handleChange} value={zipcode}></input>

                <label htmlFor="phone"><h1>Phone:</h1></label>
                <input name="phone" onChange={this.handleChange} value={phone}></input>
                
                <button type="submit">Submit</button>
                <button type="cancel" onClick={() => this.props.history.push("/cart")}>Cancel</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      auth: state.auth,
      cart: state.cart.userCart,
      order: state.order
    }
  }

const mapDispatchToProps = (dispatch, {history}) => ({
    toUpdateOrder: (order) => dispatch(updateOrder(order)),
    getOrder: (userId) => dispatch(fetchOrder(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
