import React from 'react'
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';

import "./FAQ.css"
function FAQ() {
  return (
    <div className='accord'>
        
    <IonAccordionGroup animated={false}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Are the services free?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        Yes we will provide free services to cure your mental health.
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>How reliable you are?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          We have a great team of expertise doctors who deliver sessions on diverse topics.
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>What services you will provide?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          We will provide sessions and articles on multiple diverse health topics.
        </div>
      </IonAccordion>
    </IonAccordionGroup>
    </div>
  )
}

export default FAQ


