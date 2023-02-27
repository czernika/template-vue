<template>
    <div class="container">
        <div class="flex justify-center items-center h-screen text-3xl text-cyan-700">
            {{ exampleStore.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useExampleStore } from '@/stores/example'

const exampleStore = useExampleStore()
</script>
