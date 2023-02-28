import { fileURLToPath, URL } from 'node:url'
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            root: fileURLToPath(new URL('./', import.meta.url)),
            setupFiles: ['./tests/setup.ts'],
        },
    })
)
