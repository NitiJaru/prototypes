import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global Components */
import {
  IonPage,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
  IonIcon,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .component('ion-page', IonPage)
  .component('ion-content', IonContent)
  .component('ion-list', IonList)
  .component('ion-list-header', IonListHeader)
  .component('ion-item', IonItem)
  .component('ion-avatar', IonAvatar)
  .component('ion-label', IonLabel)
  .component('ion-button', IonButton)
  .component('ion-icon', IonIcon)
  .component('ion-text', IonText)
  .component('ion-grid', IonGrid)
  .component('ion-row', IonRow)
  .component('ion-col', IonCol)
  .component('ion-card', IonCard)
  .component('ion-card-content', IonCardContent);

router.isReady().then(() => {
  app.mount('#app');
});