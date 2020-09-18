import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function Layout({ children }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Starter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{children}</IonContent>
    </IonPage>
  );
}

export default Layout;
