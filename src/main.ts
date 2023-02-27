import { createApp } from 'vue'
import App from '@/App.vue'

/**
 * Pinia
 * @link https://pinia.vuejs.org/introduction.html
 */
import { createPinia } from 'pinia'

const pinia = createPinia()

/**
 * VueRouter
 * @link https://router.vuejs.org/installation.html
 */
import router from '@/router'

/**
 * Import main boot features
 */
import '@/bootstrap'

/**
 * Init app
 */
const el = '#app'

const app = createApp(App)
app
    .use(pinia)
    .use(router)

    .mount(el)
