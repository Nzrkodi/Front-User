import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import BootstrapVue from 'bootstrap'

import './assets/css/styles.css'
import './assets/js/main.js'
import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App)

app.use(router)
// Vue.use(BootstrapVue)
app.mount('#app')
