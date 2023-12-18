// category 的本地构建数据
export const ALL_CATAGORY_ITEM = {
  id: '1',
  name: '全部',
  value: 'All'
}

// 暗黑主题
export const THEME_DARK = 'dark'
// 浅色主题
export const THEME_LIGHT = 'light'
// 系统主题
export const THEME_SYSTEM = 'system'
// 请求api地址
export const BASE_URL = 'http://localhost:5000'

// 构建渲染数据源
export const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极夜黑'
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]

// 登录方式
export const LOGIN_TYPE_USERNAME = 'username'
export const LOGIN_TYPE_OAUTH_NO_REGISTER_CODE = 204
export const LOGIN_TYPE_QQ = 'QQ'
export const LOGIN_TYPE_WX = 'WX'

// STS 上传数据
export const REGION = 'oss-cn-beijing'
export const BUCKET = 'imooc-front'

// 微博APP Key
export const WEI_BO_APP_KEY = '3454329089'
// 微博用户的 UID
export const WEI_BO_UID = '5984245953'
