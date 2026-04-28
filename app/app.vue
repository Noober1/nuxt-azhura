<script setup lang="ts">
import FetchTest from './components/tests/FetchTest.vue';

  const API_BASE_URL = ref("https://jsonplaceholder.typicode.com");
  const init = ref(1);

  const {data, status} = await useFetch(() => `${API_BASE_URL.value}/posts/${init.value}`);
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtPage/>
</template>
