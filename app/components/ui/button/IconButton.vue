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
      <slot v-if="$slots.default" />
      <CircleQuestionMarkIcon v-else />
    </div>
    <div class="background" />
  </Primitive>
</template>

<style>
@reference "../../assets/css/main.css";

.azhura.icon-button {
  @apply relative z-0 inline-flex cursor-pointer items-center justify-center rounded-sm bg-transparent transition-all duration-300 ease-in-out;

  /* Variants */
  &.default {
    @apply text-primary-foreground hover:text-primary;
    .background {
      @apply bg-primary;
    }
  }
  &.secondary .background {
    @apply bg-secondary;
  }
  &.destructive .background {
    @apply bg-destructive;
  }

  /* Children */
  .icon-container,
  .background {
    @apply absolute inset-0 rounded-sm transition-all duration-300 ease-in-out;
  }

  .icon-container {
    @apply flex items-center justify-center backdrop-blur-none;
  }

  .background {
    @apply -z-10;
  }

  /* Hover Effects */
  &:hover {
    .background {
      @apply origin-bottom rotate-35;
    }
    .icon-container {
      @apply border-border border bg-[rgba(156,156,156,0.466)] backdrop-blur-sm;
    }
  }
}
</style>
