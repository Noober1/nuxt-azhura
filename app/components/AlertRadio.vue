<script setup lang="ts">
interface Option {
  value: string
  label: string
}

interface Props {
  title: string
  description?: string
  options: Option[]
  modelValue: string
}

defineProps<Props>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <Alert>
    <AlertTitle>{{ title }}</AlertTitle>
    <AlertDescription v-if="description" class="mb-4">
      {{ description }}
    </AlertDescription>
    <RadioGroup :value="modelValue" @update:model-value="(val) => emit('update:modelValue', val)">
      <div v-for="option in options" :key="option.value" class="flex items-center gap-2">
        <RadioGroupItem :id="option.value" :value="option.value" />
        <Label :for="option.value" class="cursor-pointer font-normal">
          {{ option.label }}
        </Label>
      </div>
    </RadioGroup>
  </Alert>
</template>
