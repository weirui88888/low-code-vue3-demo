import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 6800, // 端口号
    open: true, // 自动打开浏览器
    cors: true, // 跨域设置允许
    strictPort: true // 如果端口已占用直接退出
  }
})
