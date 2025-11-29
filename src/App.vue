<script setup lang="ts">
const MockComponent = defineComponent(async () => {
    const greeting = ref('Hello Sweetie')

    await new Promise((resolve) => {
        greeting.value = "It's the database here"

        setTimeout(() => {
            resolve(true)
        }, 1000)
    })

    return () => h('p', greeting.value)
})
</script>

<template>
    <AuthLayout>
        <Suspense>
            <MockComponent />
            <template #fallback>
                <span>Loading ...</span>
            </template>
        </Suspense>
        <!-- <RouterView /> -->
    </AuthLayout>
</template>
