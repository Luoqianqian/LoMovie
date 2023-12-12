import { createStore } from "vuex"
import getters from "./getters.js"
import category from './modules/category.js'
import app from './modules/app.js'
import theme from "./modules/theme.js"
import search from './modules/search'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    category,
    theme,
    app,
    search,
    user
  },
  plugins: [
    createPersistedState({
      key: 'loshare',
      paths: ['category', 'theme', 'search', 'user']
    })
  ]
})

export default store
