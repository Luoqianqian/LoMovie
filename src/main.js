import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import mLibs from './libs'
import 'virtual:svg-icons-register'

createApp(App).use(router).use(mLibs).mount('#app')
