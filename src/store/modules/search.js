export default {
  namespaced: true,
  state: () => ({
    histories: []
  }),
  mutation: {
    // 添加历史记录
    addHistory(state, newHistory) {
      const isFindIndex = state.histories.findIndex(newHistory)
      // 如果已存在
      if(isFindIndex > -1) {
        // 删除旧历史记录
        state.histories.splice(isExisted, 1)
      }
      // 添加到数组首部
      state.histories.unshift(history)
    },
    // 删除指定历史记录
    deleteHistory(state, index) {
      state.histories.splice(index, 1)
    },
    // 删除所有历史记录
    deleteAllHistory(state) {
      state.histories = []
    }
  }
}