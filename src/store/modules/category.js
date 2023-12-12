import { getCategories } from '@/api/category.js'
import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
  // 独立作用域
  namespaced: true,
  state: () => ({
    categories: [ALL_CATEGORY_ITEM],
  }),
  // getters: {
  //   getCategorys(state) {
  //     return state.categorys
  //   },
  // },
  mutations: {
    setCategories(state, res) {
      state.categories = [ALL_CATEGORY_ITEM, ...res]
    }
  },
  actions: {
    async useCategoriesData(context) {
      const result = await getCategories()
      context.commit('setCategories', result)
    }
  }
}