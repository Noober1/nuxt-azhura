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
    orientation === 'horizontal'
      ? '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md'
      : '[&>button]:rounded-none [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md'
  ]">
    <slot />
  </div>
</template>
