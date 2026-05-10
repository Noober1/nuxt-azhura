
<script setup lang="ts">
    import { motion } from 'motion-v'
</script>

<template>
  <motion.h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" v-bind="$props">
    <slot />
  </motion.h1>
</template>

