import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: "Your Portfolio",
          description: "A stunning portfolio.",
          ogImage: "https://my-portfolio-weld-three-57.vercel.app/assets/385438962_790771539643042_7852980290333862625_n-CBXWyVR3.jpg"
        }
      }
    })
  ]
}
