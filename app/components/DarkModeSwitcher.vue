<template>
  <ClientOnly>
    <Skeleton v-if="colorMode.unknown" class="h-6 w-11 rounded-full" />
    <ButtonGroup v-else>
      <Button
        @click="colorMode.preference = 'light'"
        :variant="variant('light') ? 'default' : 'outline'"
      >
        Light
      </Button>
      <Button
        @click="colorMode.preference = 'dark'"
        :variant="variant('dark') ? 'default' : 'outline'"
      >
        Dark
      </Button>
      <Button 
        @click="colorMode.preference = 'system'"
        :variant="variant('system') ? 'default' : 'outline'"
        >
        System
        </Button>
    </ButtonGroup>
  </ClientOnly>
</template>

<script setup lang="ts">
import Skeleton from './ui/skeleton/Skeleton.vue'

const variant = (val: string) => colorMode.preference === val
const colorMode = useColorMode()

</script>

<style lang="scss" scoped>

</style>