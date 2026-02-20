import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MoleculesVue',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['vue', '@molecule-ui/atoms-vue'],
      output: {
        globals: {
          vue: 'Vue',
          '@molecule-ui/atoms-vue': 'AtomesVue'
        }
      }
    },
    sourcemap: true,
    minify: 'terser'
  }
})