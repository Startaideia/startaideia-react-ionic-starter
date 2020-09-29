import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

function Guest({ token, ...props }) {
  if (token) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}

function mapStateToProps({ auth }) {
  return auth;
}

export default connect(mapStateToProps)(Guest) as any;
