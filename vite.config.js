import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    plugins: [
        vue(),

        WindiCSS(),

        AutoImport({
            imports: [
                'vue',
                'vue-router',
            ],
            dts: 'src/types/generated/auto-imports.d.ts',
            vueTemplate: true,
            eslintrc: {
                enabled: true,
            },
        }),

        Components({
            dts: 'src/types/generated/components.d.ts',
            directoryAsNamespace: true,
        }),

        Pages({
            dirs: 'src/views',
        }),

        Layouts(),
    ],
})
