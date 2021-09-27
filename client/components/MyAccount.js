import React from "react"
import { Link } from "react-router-dom";

class MyAccount extends React.Component {
    render() {
        return (
            <div>
                <br />
                <Link to="/accountInfo">View Account Information</Link> 
                <br />
                <br />
                <Link to="/pastOrders">View Past Orders</Link>
            </div>
        )
    }
}

export default MyAccount;