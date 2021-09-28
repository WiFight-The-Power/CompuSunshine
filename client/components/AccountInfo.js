import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../store/user";

class AccountInfo extends React.Component {
  constructor() {
    super();
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const user = this.props.auth;

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
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toUpdateUser(this.props.auth);
  }

  render() {
    const { first_name, last_name, email, address_1, address_2, phone, city, state, zipcode } =
      this.state;

    return (
      <div>
        <form id="account-info-form" onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">
            <h1>First Name:</h1>
          </label>
          <input name="first_name" onChange={this.handleChange} value={first_name}></input>

          <label htmlFor="last_name">
            <h1>Last Name:</h1>
          </label>
          <input name="last_name" onChange={this.handleChange} value={last_name}></input>

          <label htmlFor="email">
            <h1>Email:</h1>
          </label>
          <input name="email" onChange={this.handleChange} value={email}></input>

          <label htmlFor="address_1">
            <h1>Address Line 1:</h1>
          </label>
          <input name="address_1" onChange={this.handleChange} value={address_1}></input>

          <label htmlFor="address_2">
            <h1>Address Line 2:</h1>
          </label>
          <input name="address_2" onChange={this.handleChange} value={address_2}></input>

          <label htmlFor="city">
            <h1>City:</h1>
          </label>
          <input name="city" onChange={this.handleChange} value={city}></input>

          <label htmlFor="state">
            <h1>State:</h1>
          </label>
          <input name="state" onChange={this.handleChange} value={state}></input>

          <label htmlFor="zipcode">
            <h1>Zipcode:</h1>
          </label>
          <input name="zipcode" onChange={this.handleChange} value={zipcode}></input>

          <label htmlFor="phone">
            <h1>Phone:</h1>
          </label>
          <input name="phone" onChange={this.handleChange} value={phone}></input>

          <button type="submit">Submit</button>
          <button type="button" onClick={() => this.props.history.push("/myAccount")}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  toUpdateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
