export default {
  // 获取导航目录
  getCategories: (state) => state.category.categories,

  // 获取主题模式
  getThemeType: (state) => state.theme.themeType,

// category选中项
  currentCategory: (state) => state.app.currentCategory,
 
  // category选中项下标
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex(
      (item) => item.id === getters.currentCategory.id
    )
  },

// 搜索记录
  histories: (state) => state.search.histories,

// 搜索文本
  searchText: (state) => state.app.searchText,

// token
  token: (state) => state.user.token,

// 获取用户信息
  userInfo: (state) => state.user.userInfo,

}