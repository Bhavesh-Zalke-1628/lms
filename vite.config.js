import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import proxy from 'proxy'


// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    '/api': "http://localhost:5000/api/"
  },
  plugins: [react()],
})
