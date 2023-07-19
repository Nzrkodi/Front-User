import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import BootstrapVue from 'bootstrap'

import './assets/css/styles.css'
import './assets/js/main.js'
import 'bootstrap/dist/css/bootstrap.css'

import 'izitoast/dist/css/iziToast.css'
import 'izitoast/dist/js/iziToast.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas);

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
