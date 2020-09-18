import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useGlobal } from "app/shared";

function Layout({ children }) {
  const { get } = useGlobal();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{get("app.title", "Ionic React Starter")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{children}</IonContent>
    </IonPage>
  );
}

export default Layout;
