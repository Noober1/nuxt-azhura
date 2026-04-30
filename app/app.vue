<script setup lang="ts">
import 'vue-sonner/style.css'
</script>

<template>
  <NuxtRouteAnnouncer />
  <div>
    <NuxtPage />
  </div>
  <ClientOnly>
    <Toaster />
  </ClientOnly>
</template>
