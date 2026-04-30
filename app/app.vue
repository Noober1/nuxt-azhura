<script setup lang="ts">
</script>

<template>
    <NuxtRouteAnnouncer />
    <div>
      <NuxtPage/>
    </div>
    <ClientOnly>
      <div class="fixed inset-0 pointer-events-none">
        <Toaster />
      </div>
    </ClientOnly>
</template>
