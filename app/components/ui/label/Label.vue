<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Label } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends LabelProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {})
const delegatedProps = reactiveOmit(props, 'class', 'for')
</script>

<template>
  <Label
    data-slot="label"
    :for="props.for || undefined"
    suppress-hydration-warning
    :class="
      cn(
        'gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
