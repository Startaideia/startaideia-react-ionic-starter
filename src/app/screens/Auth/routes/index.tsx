import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { Route, useRouteMatch } from "react-router";

import { Layout } from "../shared";
import { Login } from "../screens";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <IonRouterOutlet>
        <Route path={`${path}/login`} component={Login} exact />
      </IonRouterOutlet>
    </Layout>
  );
}

export default Routes;
