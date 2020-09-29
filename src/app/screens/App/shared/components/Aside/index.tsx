import React from "react";
import {
  IonMenu,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { powerOutline } from "ionicons/icons";
import { connect } from "react-redux";
import { authActions } from "store";

function Aside({ logout }) {
  return (
    <IonMenu side="start" contentId="main">
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem onClick={() => logout()}>
            <IonLabel>Sair</IonLabel>
            <IonIcon icon={powerOutline} slot="start" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(authActions.logout()),
  };
}

export default connect(null, mapDispatchToProps)(Aside) as any;
