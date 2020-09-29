import React from "react";
import { Route, useRouteMatch } from "react-router";
import { IonRouterOutlet } from "@ionic/react";

import { Signup, Login } from "../screens";
import { Layout } from "../shared";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <IonRouterOutlet>
        <Route path={`${path}/signup`} component={Signup} exact />
        <Route path={`${path}/login`} component={Login} exact />
      </IonRouterOutlet>
    </Layout>
  );
}

export default Routes;
