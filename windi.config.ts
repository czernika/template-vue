import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    /**
     * @link https://windicss.org/features/attributify.html
     */
    attributify: { prefix: 'w' },

    extract: {
        include: [
            /** Vue template classes */
            './src/components/**/*.vue',
            './src/layouts/**/*.vue',
            './src/views/**/*.vue',
            './src/*{.vue,.ts}',

            /** Classes from global stores */
            './src/stores/**/*.ts',

            /** Index file */
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
