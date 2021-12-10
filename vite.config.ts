import vue from '@vitejs/plugin-vue'

import { defineConfig, loadEnv } from 'vite'

// const gitHash = execSync('git rev-parse --short HEAD', {
//   encoding: 'utf-8',
// }).split('\n')[0]
export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],

    esbuild: {
      jsxFactory: 'h',
      jsxInject: 'import {h,Fragment} from "vue"',
      jsxFragment: 'Fragment',
    },
  })
}
