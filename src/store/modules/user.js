import md5 from "js-md5"

export default {
  namespaced: true,
  state: () => ({
    // 登录之后服务器返回的token
    token: '',
    // 保存用户的信息
    userInfo: {},
  }),
  mutation: {
    // 设置token
    setToken(state, newToken) {
      state.token = newToken
    },
    // 设置用户信息
    setUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo
    },
    actions: {
      // 注册
      async register(context, payload) {
        const { password } = payload
        return await registerUser({
          ...payload,
          password: password? md5(password) : ''
        })
      },
      // 登录
      async login(context, payload) {
        const { password } = payload
        const data =  await loginUser({
          ...payload,
          password: password? md5(password) : ''
        })
        context.commit('setToken', data.token)
      },
      // 获取用户信息
      async profile(context) {
        const data = await getUserInfo()
        context.commit('setUserInfo', data)
      },
      // 退出登录
      logout(context) {
        context.commit('setToken', '')
        context.commit('setUserInfo', {})
        // 退出登录后重新刷新页面
        location.reload()
      }
    }
  }
}