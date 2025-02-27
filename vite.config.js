import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve:{
    alias:{
      '@public':path.resolve(__dirname,'./public'),
      '@assets':path.resolve(__dirname,'./src/assets')
    }
  }
})
