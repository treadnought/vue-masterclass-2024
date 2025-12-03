<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database.types'
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'
import { projectsQuery } from '@/utilities/supaQueries'
import type { Projects } from '@/utilities/supaQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
    const { data, error } = await projectsQuery

    if (error) console.log(error)

    projects.value = data
}

await getProjects()

const columns: ColumnDef<Projects[0]>[] = [
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'text-left' }, 'Name'),
        cell: ({ row }) => {
            return h(
                RouterLink,
                {
                    to: `/projects/${row.original.slug}`,
                    class: 'text-left font-medium hover:text-blue-700 block w-full',
                },
                () => row.getValue('name'),
            )
        },
    },
    {
        accessorKey: 'status',
        header: () => h('div', { class: 'text-left' }, 'Status'),
        cell: ({ row }) => {
            return h(
                RouterLink,
                {
                    to: `/projects/${row.original.slug}`,
                    class: 'text-left font-medium hover:text-blue-700 block w-full',
                },
                row.getValue('status'),
            )
        },
    },
    {
        accessorKey: 'collaborators',
        header: () => h('div', { class: 'text-left' }, 'Collaborators'),
        cell: ({ row }) => {
            return h(
                RouterLink,
                {
                    to: `/projects/${row.original.slug}`,
                    class: 'text-left font-medium hover:text-blue-700 block w-full',
                },
                JSON.stringify(row.getValue('collaborators')),
            )
        },
    },
]
</script>

<template>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
