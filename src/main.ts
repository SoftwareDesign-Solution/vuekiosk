import './styles/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Initialize Api
const apiUrl = 'http://my-json-server.typicode.com/softwaredesign-solution/vuekiosk';
app.provide('apiUrl', apiUrl);

app.use(createPinia())
app.use(router)

app.mount('#app')
