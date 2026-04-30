<script setup lang="ts">
interface Props {
  variant?: 'ordered' | 'unordered'
  items: string[]
}

withDefaults(defineProps<Props>(), { variant: 'unordered' })
</script>

<template>
  <ol v-if="variant === 'ordered'" class="ml-6 list-decimal space-y-2">
    <li v-for="(item, idx) in items" :key="idx" class="text-foreground">
      {{ item }}
    </li>
  </ol>
  <ul v-else class="ml-6 list-disc space-y-2">
    <li v-for="(item, idx) in items" :key="idx" class="text-foreground">
      {{ item }}
    </li>
  </ul>
</template>
