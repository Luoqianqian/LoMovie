import { defineAsyncComponent } from "vue"
// export { confirm } from './confirm'

export default {
  install(app) {
    // Vite supports importing multiple modules 
    const components = import.meta.glob('./*/*.vue')
    for(const [key, value] of Object.entries(components)) {
      const componentName = 'm-' + key.split('/')[1]
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}