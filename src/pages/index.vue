<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
    <div>
        <Button>Damn You</Button>
    </div>
    <div>
        <h1>Home Page</h1>
        <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Project 1</RouterLink>
    </div>
</template>

<style scoped></style>
