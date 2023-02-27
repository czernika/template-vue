import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
    state: () => ({
        title: 'Hello World',
    }),
})
