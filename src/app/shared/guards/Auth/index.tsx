import React from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";

function Auth({ token, ...props }) {
  if (!token) {
    return <Redirect to="/auth/login" />;
  }

  return <Route {...props} />;
}

function mapStateToProps({ auth }) {
  return auth;
}

export default connect(mapStateToProps)(Auth) as any;
