<template>
    <div class="bg-red-500">
        <ComponentsTest>
            <NuxtLink to="/posts/1">post 1</NuxtLink>
        </ComponentsTest>
    </div>
</template>

<script setup>
    useHead({
        title: 'Home',
        titleTemplate: null
    })
</script>

<style lang="scss" scoped>

</style>