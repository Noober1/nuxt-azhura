<script setup lang="ts">

definePageMeta({
  validate (route) {
    // Check if the id is made up of digits
    return typeof route.params.postId === 'string' && /^\d+$/.test(route.params.postId)
  },
})

const route = useRoute()
const postId = route.params.postId

const { data: post, status } = await useFetch<{
  id: number
  userId: number
  title: string
  body: string
}>(() => `https://jsonplaceholder.typicode.com/posts/${postId}`)
</script>

<template>
  <div>
    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="status === 'error'">Failed to load post.</p>
    <article v-else-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <small>Post ID: {{ post.id }} | User ID: {{ post.userId }}</small>
    </article>
  </div>
</template>
