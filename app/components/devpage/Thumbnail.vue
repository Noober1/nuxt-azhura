<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  ratio?: number
}

withDefaults(defineProps<Props>(), { ratio: 16 / 9 })

const loaded = ref(false)
</script>

<template>
  <AspectRatio :ratio="ratio" class="relative overflow-hidden bg-muted">
    <Skeleton v-if="!loaded" class="absolute inset-0" />
    <img
      :src="src"
      :alt="alt"
      @load="loaded = true"
      class="object-cover w-full h-full transition-opacity duration-300"
      :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
    />
  </AspectRatio>
</template>
