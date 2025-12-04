import type { ColumnDef } from '@tanstack/vue-table'
import type { Projects } from '../supaQueries'
import { RouterLink } from 'vue-router'

export const columns: ColumnDef<Projects[0]>[] = [
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
