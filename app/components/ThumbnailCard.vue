<script setup lang="ts">
interface Props {
  src: string
  alt: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <Card>
    <Thumbnail :src="src" :alt="alt" />
    <CardContent class="pt-4">
      <TypographyH4>{{ title }}</TypographyH4>
      <TypographyMuted class="mt-2">{{ description }}</TypographyMuted>
    </CardContent>
  </Card>
</template>
