<script setup lang="ts">
const props = defineProps<{
  data: any
  status: string
}>()
</script>

<template>
  <div>
    <p>Status: {{ props.status }}</p>
    <div v-if="props.data">
      <p><strong>ID:</strong> {{ props.data.id }}</p>
      <p><strong>Title:</strong> {{ props.data.title }}</p>
      <p><strong>Body:</strong> {{ props.data.body }}</p>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>
