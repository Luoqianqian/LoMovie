import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    // 当前选中的类目
    currentCategory: ALL_CATEGORY_ITEM,
    // 搜索的文本
    searchText: '',
  }),
  mutations: {
    // 切换类目
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    },
    changeSearchText(state, newSearchText) {
      state.searchText = newSearchText
    }
  }
}