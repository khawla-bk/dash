import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ValidRoute = ({ children, isAuth, load }) => {
  if (load) {
    return null;
  }
  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return children;
};
const mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  load: state.userReducer.load,
});

export default connect(mapStateToProps, {})(ValidRoute);
