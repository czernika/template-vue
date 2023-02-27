import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    /**
     * @link https://windicss.org/features/attributify.html
     */
    attributify: { prefix: 'w' },

    extract: {
        include: [
            './src/**/*{.ts,.vue}',
            './index.html',
        ],
    },

    theme: {
        container: {
            center: true,
            padding: '1rem',
        },

        extend: {},
    },

    /**
     * @link https://windicss.org/features/shortcuts.html
     */
    shortcuts: {},

    plugins: [],
})
