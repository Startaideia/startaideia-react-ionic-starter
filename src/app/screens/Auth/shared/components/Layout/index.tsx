import React from "react";
import { IonPage, IonContent } from "@ionic/react";

function Layout({ children }) {
  return (
    <IonPage>
      <IonContent>{children}</IonContent>
    </IonPage>
  );
}

export default Layout;
