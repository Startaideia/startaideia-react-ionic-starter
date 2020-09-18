import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

import { Auth, App } from "../screens";
import { Redirect, Route } from "react-router";

function Routes() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/auth" component={Auth.Routes} />
        <Route path="/profile" component={App.Routes} />
        <Redirect from="/" to="/profile" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
