import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

import { Auth, App } from "../screens";
import { Redirect } from "react-router";
import { Guest, Auth as User } from "app/shared";

function Routes() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Guest path="/auth" component={Auth.Routes} />
        <User path="/profile" component={App.Routes} />
        <Redirect from="/" to="/profile" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
