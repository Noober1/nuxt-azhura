<script setup lang="ts">
import type { AspectRatioProps } from 'reka-ui'
import { AspectRatio } from 'reka-ui'

const props = defineProps<AspectRatioProps>()
</script>

<template>
  <AspectRatio
    v-slot="slotProps"
    data-slot="aspect-ratio"
    v-bind="props"
    class="p-0"
  >
    <slot v-bind="slotProps" />
  </AspectRatio>
</template>
