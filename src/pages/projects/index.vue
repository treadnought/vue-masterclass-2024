<script setup lang="ts">
import { projectsQuery } from '@/utilities/supaQueries'
import { columns } from '@/utilities/tableColumns/projectsColumns'
import type { Projects } from '@/utilities/supaQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
    const { data, error } = await projectsQuery

    if (error) console.log(error)

    projects.value = data
}

await getProjects()
</script>

<template>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
