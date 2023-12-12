import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[name]',
  })],
  // 软链接
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src')
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       // 后端url
  //       target: 'http://localhost:5000',
  //       changeOrigin: true,
  //       rewrite: path => path.replace('/api', ''),
  //     }
  //   }
  // }
})
