<script setup lang="ts">
import { computed } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'

interface Props {
  modelValue: number
  min?: number
  max?: number
  step?: number
}

const props = withDefaults(defineProps<Props>(), { step: 1 })
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

const canDecrement = computed(() => !props.min || props.modelValue > props.min)
const canIncrement = computed(() => !props.max || props.modelValue < props.max)

function decrement() {
  if (canDecrement.value) {
    emit('update:modelValue', props.modelValue - props.step)
  }
}

function increment() {
  if (canIncrement.value) {
    emit('update:modelValue', props.modelValue + props.step)
  }
}

function updateValue(e: Event) {
  const val = parseFloat((e.target as HTMLInputElement).value)
  if (!isNaN(val)) {
    emit('update:modelValue', val)
  }
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Button
      :disabled="!canDecrement"
      size="icon"
      variant="outline"
      @click="decrement"
    >
      <Minus class="h-4 w-4" />
    </Button>
    <Input
      type="number"
      :value="modelValue"
      @input="updateValue"
      class="w-20 text-center"
    />
    <Button
      :disabled="!canIncrement"
      size="icon"
      variant="outline"
      @click="increment"
    >
      <Plus class="h-4 w-4" />
    </Button>
  </div>
</template>
