<script setup lang="ts">
defineProps<{
  code: string
  language?: string
}>()
</script>

<template>
  <div class="rounded-lg border bg-muted/50 overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 border-b bg-muted/70">
      <span class="text-sm font-mono text-muted-foreground">{{ language || 'vue' }}</span>
    </div>
    <div class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background">
      <pre class="whitespace-pre-wrap"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>
