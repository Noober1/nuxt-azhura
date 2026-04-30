<script setup lang="ts">
import { useIsDarkMode } from './composables/states';

  const API_BASE_URL = ref("https://jsonplaceholder.typicode.com");
  const init = ref(1);

  const {data, status} = await useFetch(() => `${API_BASE_URL.value}/posts/${init.value}`);
  const {isDarkMode} = useIsDarkMode();
</script>

<template>
    <NuxtRouteAnnouncer />
    <div>
      <NuxtPage/>
    </div>
    <ClientOnly>
      <Toaster />
    </ClientOnly>
</template>
