<script setup lang="ts">
withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
  }>(),
  { orientation: 'horizontal' }
)
</script>

<template>
  <div :class="[
    'flex',
    orientation === 'horizontal' ? 'flex-row' : 'flex-col',
    '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md'
  ]">
    <slot />
  </div>
</template>
