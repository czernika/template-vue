import { createApp } from 'vue'
import App from '@/App.vue'

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
    .mount(el)
