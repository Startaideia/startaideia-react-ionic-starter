import React from "react";
import { Form, Input, Submit } from "@startaideia/react-forms";
import { IonLoading, IonToast } from "@ionic/react";
import { connect } from "react-redux";

import { Container, Brand, Link } from "./styles";
import logo from "assets/images/logo.svg";
import { authActions } from "store";

function Login({ loading, error, login }) {
  function handleSubmit(data) {
    login(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Col xs={12}>
          <Brand src={logo} />
        </Form.Col>
        <Form.Col xs={12}>
          <h1>Entrar</h1>
        </Form.Col>
        <Input.Email isRequired />
        <Input.Password isRequired />
        <Form.Footer>
          <Submit>Entrar</Submit>
        </Form.Footer>
        <Form.Col xs={12}>
          <Link to="/auth/signup">Criar uma conta</Link>
        </Form.Col>
      </Form>
      {error && (
        <IonToast isOpen={true} message={error} duration={200} color="danger" />
      )}
      {loading && <IonLoading isOpen={true} />}
    </Container>
  );
}

function mapStateToProps({ auth }) {
  return auth;
}

function mapDispatchToProps(dispatch) {
  return {
    login: (loginData) => dispatch(authActions.login(loginData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
