export default {
  // 获取导航目录
  catagories: (state) => state.catagory.catagories,

  // 获取主题模式
  getThemeType: (state) => state.theme.themeType,

// category选中项
  currentCatagory: (state) => state.app.currentCatagory,
 
  // category选中项下标
  currentCatagoryIndex: (state, getters) => {
    return getters.catagories.findIndex(
      (item) => item.id === getters.currentCatagory.id
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