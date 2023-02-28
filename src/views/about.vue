<template>
    <div>
        This is about page
    </div>

    <RouterLink
        to="/"
        class="underline"
    >
        Home
    </RouterLink>
</template>

<script setup lang="ts">
// ...
</script>

<route lang="yaml">
name: 'about'
meta:
    layout: 'default'
</route>
