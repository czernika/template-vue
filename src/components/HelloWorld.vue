<template>
    <div class="text-center">
        <VueLogo />

        <h1 class="text-2xl">
            {{ exampleStore.title }}
        </h1>

        <RouterLink
            :to="{ name: 'about' }"
            class="underline"
        >
            About
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { VueLogo } from '@/assets/icons/vue-logo.svg'
import { useExampleStore } from '@/stores/example'

const exampleStore = useExampleStore()
</script>
