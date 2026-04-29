<template>
    <div>
        <button @click="toggleDarkMode">Toggle Dark Mode from Other Test Component</button>
    </div>
</template>

<script setup lang="ts">
    const { toggleDarkMode } = useIsDarkMode();
</script>

<style lang="scss" scoped>

</style>