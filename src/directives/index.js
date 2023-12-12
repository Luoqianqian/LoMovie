export default {
  async install(app) {
    const directives = import.meta.glob('./modules/*.js')
    // console.log(directives)
    for(const [value, key] of Object.entries(directives) ) {
      console.log(value, key)
      // 拼接组件注册的 name
      const arr = key.split('/')
      const directiveName = arr[arr.length - 1].replace('.js', '')
      // 完成注册
      app.directive(directiveName, value.default)
    }
  }
}