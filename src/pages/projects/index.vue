<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref()
;(async () => {
    const { data, error } = await supabase.from('projects').select()

    if (error) console.log(error)

    projects.value = data

    console.log('Projects: ', projects.value)
})()
</script>

<template>
    <div>
        <h1>Projects Page</h1>
        <RouterLink to="/">Home</RouterLink>
        {{ projects }}
    </div>
</template>

<style scoped></style>
