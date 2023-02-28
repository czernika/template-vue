import { defineStore } from 'pinia'

interface ExampleStore {
    title: string
}

export const useExampleStore = defineStore('example', {
    state: () => ({
        title: 'Hello World',
    } as ExampleStore),
})
