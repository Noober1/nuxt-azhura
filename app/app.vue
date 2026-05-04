<script setup lang="ts">
import 'vue-sonner/style.css'
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis: Lenis | null = null

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    autoRaf: true,
  })

})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
})

</script>

<template>
  <NuxtRouteAnnouncer />
    <NuxtPage />
  <ClientOnly>
    <Toaster />
  </ClientOnly>
</template>
