<template>
    <div>
            <button @click="toggleDarkMode">Toggle Dark Mode</button>
    </div>
</template>

<script setup lang="ts">
    const { toggleDarkMode } = useIsDarkMode();
</script>

<style lang="scss" scoped>

</style>