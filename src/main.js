// ==|== Imports ===================================================================================
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import routes from './router/routes';
import viteSSR, { ClientOnly } from 'vite-ssr';
import { createHead } from '@vueuse/head';

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
// const app = createApp(App);
// app.use(store);
// app.use(router);
// app.component('font-awesome-icon', FontAwesomeIcon);
// app.component('font-awesome-layers', FontAwesomeLayers);
// app.mount('#app');

export default viteSSR(
  App,
  { routes },
  ({ app, router, isClient, url, initialState, initialRoute, request }) => {
    const head = createHead();
    app.use(head);

    app.component(ClientOnly.name, ClientOnly);

    app.component('font-awesome-icon', FontAwesomeIcon);
    app.component('font-awesome-layers', FontAwesomeLayers);

    app.provide('initialState', initialState);

    // Before each route navigation we request the data needed for showing the page.
    router.beforeEach(async (to, from, next) => {
      if (!!to.meta.state) {
        // This route has state already (from server) so it can be reused.
        // State is always empty in SPA development, but present in SSR development.
        return next();
      }

      // `isClient` here is a handy way to determine if it's SSR or not.
      // However, it is a runtime variable so it won't be tree-shaked.
      // Use Vite's `import.meta.env.SSR` instead for tree-shaking.
      const baseUrl = isClient ? '' : url.origin;

      next();
    });

    return { head };
  }
);
