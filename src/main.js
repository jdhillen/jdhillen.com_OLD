// ==|== Imports ===================================================================================
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';

// ==|== FontAwesome ===============================================================================
library.add(
  faEnvelope,
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter
);

// ==|== Create App ================================================================================
const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers);
app.mount('#app');
