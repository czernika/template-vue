<template>
    <div class="container">
        <div class="flex justify-center flex-col items-center h-screen text-2xl text-cyan-700 selection:bg-cyan-600 selection:text-white">
            <VueLogo class="w-auto h-36 mb-4" />

            <h1>{{ exampleStore.title }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VueLogo } from '@/assets/icons/vue-logo.svg'
import { useExampleStore } from '@/stores/example'

const exampleStore = useExampleStore()
</script>
