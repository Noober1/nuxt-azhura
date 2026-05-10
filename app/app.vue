<script setup lang="ts">
import 'vue-sonner/style.css'
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import DarkModeSwitcher from './components/DarkModeSwitcher.vue'

let lenis: Lenis | null = null

onMounted(() => {
  lenis = new Lenis({
    duration: 1.5,
    lerp: 0.6,
    wheelMultiplier:0.5,
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
  <DevOnly>
    <div class="fixed bottom-5 right-5">
      <DarkModeSwitcher/>
    </div>
  </DevOnly>
  <ClientOnly>
    <Toaster />
  </ClientOnly>
</template>
