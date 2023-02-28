import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import lightningcss from 'vite-plugin-lightningcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import svgSpritePlugin from 'vite-plugin-svg-sprite-component'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    build: {
        manifest: true,

        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (typeof assetInfo.name === 'undefined') {
                        return '[name].[extname]'
                    }

                    let extType = assetInfo.name.split('.')[1]
                    if (/png|jpe?g|gif|tiff|bmp|webp|ico/i.test(extType)) {
                        extType = 'images'
                    }

                    if (/svg/i.test(extType)) {
                        extType = 'icons'
                    }

                    return `${extType}/[name].[hash][extname]`
                },

                chunkFileNames: 'js/[name].[hash].js',
                entryFileNames: 'js/[name].[hash].js',
            },
        },
    },


    plugins: [
        vue(),

        WindiCSS(),

        lightningcss(),

        // legacy(),

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

        svgSpritePlugin({
            component: { type: 'vue' },
        }),
    ],
})
