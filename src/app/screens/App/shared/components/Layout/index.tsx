import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonSplitPane,
  IonMenuButton,
} from "@ionic/react";

import { useGlobal } from "app/shared";
import Aside from "../Aside";

function Layout({ children }) {
  const { get } = useGlobal();

  return (
    <IonSplitPane contentId="main">
      <Aside />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{get("app.title", "Ionic React Starter")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="main">{children}</IonContent>
      </IonPage>
    </IonSplitPane>
  );
}

export default Layout;
