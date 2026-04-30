<script setup lang="ts">
</script>

<template>
  <NuxtRouteAnnouncer />
  <div>
    <NuxtPage />
  </div>
  <ClientOnly>
    <div id="toast-container" class="fixed bottom-4 right-4 z-50 pointer-events-none">
      <Toaster />
    </div>
  </ClientOnly>
</template>
