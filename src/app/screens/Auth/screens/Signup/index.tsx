import React from "react";
import { Form, Input, Submit } from "@startaideia/react-forms";
import { IonLoading, IonToast } from "@ionic/react";
import { connect } from "react-redux";

import { Container, Brand } from "./styles";
import logo from "assets/images/logo.svg";
import { authActions } from "store";

function Signup({ loading, error, signup }) {
  function handleSubmit(data) {
    signup(data);
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
        <Input.Text name="name" label="Nome" isRequired />
        <Input.Email isRequired />
        <Input.Password isRequired />
        <Input.Password
          name="password_confirmation"
          label="Confirme a senha"
          isRequired
        />
        <Form.Footer>
          <Submit>Criar uma conta</Submit>
        </Form.Footer>
      </Form>
      {error && (
        <IonToast
          isOpen={!!error}
          message={error}
          duration={2000}
          color="danger"
        />
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
    signup: (signupData) => dispatch(authActions.signup(signupData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
