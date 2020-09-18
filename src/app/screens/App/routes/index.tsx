import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { Route, useRouteMatch } from "react-router";

import { Profile } from "../screens";
import { Layout } from "../shared";

function Routes() {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <IonRouterOutlet>
        <Route path={path} component={Profile.Routes} />
      </IonRouterOutlet>
    </Layout>
  );
}

export default Routes;
