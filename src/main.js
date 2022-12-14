import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
