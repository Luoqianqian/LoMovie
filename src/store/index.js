import { createStore } from "vuex"
import getters from "./getters.js"
import catagory from './modules/catagory.js'
import app from './modules/app.js'
import theme from "./modules/theme.js"
import search from './modules/search.js'
import user from './modules/user.js'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    catagory,
    theme,
    app,
    search,
    user
  },
  plugins: [
    createPersistedState({
      key: 'loshare',
      paths: ['catagory', 'theme', 'search', 'user']
    })
  ]
})

export default store
