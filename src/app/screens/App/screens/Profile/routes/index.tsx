import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { Route, useRouteMatch } from "react-router";

import { Feed, Config } from "../screens";
import { Layout } from "../shared";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <IonRouterOutlet>
        <Route path={`${path}/config`} component={Config} exact />
        <Route path={path} component={Feed} exact />
      </IonRouterOutlet>
    </Layout>
  );
}

export default Routes;
