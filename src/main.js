import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './_reset.css'
import './scss/all.scss'
import 'bootstrap'
import VueLazyLoad from 'vue3-lazyload'

createApp(App).use(store).use(router).use(VueLazyLoad).mount('#app')
