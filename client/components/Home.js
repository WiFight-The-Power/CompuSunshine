import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
  console.log("current state: ", props.state);
  const { username } = props;

  return (
    <div>
      {console.log("current state: ", props.state)}
      <h3>Welcome, {username}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    state: state,
  };
};

export default connect(mapState)(Home);
