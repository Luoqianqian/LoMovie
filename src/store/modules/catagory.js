import { getCatagories } from '@/api/catagory.js'
import { ALL_CATAGORY_ITEM } from '@/constants'

export default {
  // 独立作用域
  namespaced: true,
  state: () => ({
    catagories: [ALL_CATAGORY_ITEM],
  }),
  mutations: {
    setCatagories(state, res) {
      state.catagories = [ALL_CATAGORY_ITEM, ...res]
    }
  },
  actions: {
    async useCatagoriesData(context) {
      const result = await getCatagories()
      context.commit('setCatagories', result)
    }
  }
}