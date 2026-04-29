<template>
    <div class="bg-red-500">
        <ComponentsTest>
            <NuxtLink to="/posts/1">post 1</NuxtLink>
        </ComponentsTest>
        <div class="flex flex-row w-xs">
        <ContactForm />
        </div>
    </div>
</template>

<script setup>
    import ComponentsTest from '~/components/tests/ComponentsTest.vue';
    useHead({
        title: 'Home',
        titleTemplate: null
    })
</script>

<style lang="scss" scoped>

</style>