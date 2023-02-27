import { createApp } from 'vue'
import App from '@/App.vue'

/**
 * VueRouter
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
    .use(router)

    .mount(el)
