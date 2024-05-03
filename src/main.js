import { createApp } from 'vue'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

// router
import router from '@/routes/index.js';

// store
import store from '@/store/index.js';
createApp(App).use(vuetify).use(router).use(store).mount('#app')
