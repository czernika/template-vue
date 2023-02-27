import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    plugins: [
        vue(),

        WindiCSS(),
    ],
})
