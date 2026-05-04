<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import Skeleton from './ui/skeleton/Skeleton.vue'
import { SunIcon, MoonIcon, CogIcon } from 'lucide-vue-next'

const variant = (val: string) => colorMode.preference === val
const colorMode = useColorMode()

interface Props extends PrimitiveProps {
  size?: "default" | "compact"
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  size:'default',
});

const buttons = [
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon,
  },
  {
    value: 'system',
    label: 'System',
    icon: CogIcon,
  },
] 

</script>

<template>
  <ClientOnly>
    <Skeleton v-if="colorMode.unknown" class="h-6 w-11 rounded-full" />
    <ButtonGroup v-else>
      <template v-for="button in buttons" :key="button.value">
        <Button
          @click="colorMode.preference = button.value"
          :variant="variant(button.value) ? 'default' : 'outline'"
        >
          <template v-if="props.size == 'default'">
            {{ button.label }}
          </template>
          <template v-else>
            <component :is="button.icon" />
          </template>
        </Button>        
      </template>
    </ButtonGroup>
  </ClientOnly>
</template>

<style lang="scss" scoped>

</style>