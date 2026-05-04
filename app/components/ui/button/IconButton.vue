<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import { Primitive } from 'reka-ui';
import { cn } from '@/lib/utils';
import { CircleQuestionMarkIcon } from 'lucide-vue-next';
import type { IconButtonVariants } from './IconButton';
import { iconButtonVariants } from './IconButton';

interface Props extends PrimitiveProps {
  variant?: IconButtonVariants['variant'];
  size?: IconButtonVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <Primitive
    data-slot="button"
    :data-variant="variant"
    :data-size="size"
    :as="as"
    :as-child="asChild"
    :class="cn(props.class, iconButtonVariants({ variant, size }))"
  >
    <div class="icon-container">
      <slot />
    </div>
    <div class="background" />
  </Primitive>
</template>
