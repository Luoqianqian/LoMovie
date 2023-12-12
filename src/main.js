import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import mLibs from './libs'
import mDirectives from './directives'
import store from './store'
import useTheme from './utils/theme.js'
import 'virtual:svg-icons-register'

// 初始化主题
useTheme()

createApp(App).use(router).use(store).use(mLibs).use(mDirectives).mount('#app')
