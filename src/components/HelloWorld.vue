<template>
    <div>
        {{ title }}
    </div>
</template>

<script setup lang="ts">
export interface Props {
    title: string
}

defineProps<Props>()
</script>
