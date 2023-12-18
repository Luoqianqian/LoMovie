import { ALL_CATAGORY_ITEM } from '@/constants'

export default {
  namespaced: true,
  state: () => ({
    // 当前选中的类目
    currentCatagory: ALL_CATAGORY_ITEM,
    // 搜索的文本
    searchText: '',
  }),
  mutations: {
    // 切换类目
    changeCurrentCatagory(state, newCatagory) {
      state.currentCatagory = newCatagory
    },
    changeSearchText(state, newSearchText) {
      state.searchText = newSearchText
    }
  }
}