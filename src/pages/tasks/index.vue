<script setup lang="ts">
import { tasksWithProjectsQuery } from '@/utilities/supaQueries.ts'
import { columns } from '@/utilities/tableColumns/tasksColumns.ts'
import type { TasksWithProjects } from '@/utilities/supaQueries.ts'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
    const { data, error } = await tasksWithProjectsQuery

    if (error) console.log(error)

    tasks.value = data
}

await getTasks()
</script>

<template>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
