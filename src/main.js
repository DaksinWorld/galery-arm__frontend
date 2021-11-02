import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import './rich-text-styles.css'
import './font/font.css'
import './font/librebaskerville.css'
// Libraries
import VueLazyLoad from 'vue3-lazyload'

createApp(App).use(VueLazyLoad).use(store).use(router).mount('#app')
