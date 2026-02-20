import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: "AtomsReact",
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@emotion/react': 'EmotionReact',
                    '@emotion/styled': 'EmotionStyled'
                }
            }
        },
        sourcemap: true,
        minify: 'terser'
    }
})