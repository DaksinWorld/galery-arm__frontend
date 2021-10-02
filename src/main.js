import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import './rich-text-styles.css'
import './font/font.css'
// Libraries
import Markdown from 'vue3-markdown-it'


createApp(App).use(Markdown).use(store).use(router).mount('#app')
