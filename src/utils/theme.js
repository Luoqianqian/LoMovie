import store from '@/store'
import { watch } from 'vue'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'

let matchMedia
const watchSystemThemeChange = () => {
  // 仅需初始化一次
  if(matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变更
  matchMedia.onchange = function() {
    changeTheme(THEME_SYSTEM)
  }
}

const changeTheme = (theme) => {
// html 的 class
  let themeClassName = ''
  switch (theme) {
    case THEME_LIGHT:
      themeClassName = 'light'
      break
    case THEME_DARK:
      themeClassName = 'dark'
      break
    case THEME_SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break
  }
  // 修改 html 的 class
  document.querySelector('html').className = themeClassName
}

// 监听theme变化触发change
export default () => {
  watch(
    () => store.getters.getThemeType, 
    changeTheme, 
    { immediate: true }
  )
}