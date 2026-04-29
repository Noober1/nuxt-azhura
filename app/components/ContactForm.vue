<template>
  <form @submit="onSubmit" class="space-y-4 max-w-md mx-auto">
    <div>
      <label for="name" class="block text-sm font-medium">Name</label>
      <Field
        as="input"
        id="name"
        v-model="values.name"
        name="name"
        type="text"
        class="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
      />
      <ErrorMessage name="name" class="text-sm text-red-600" />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium">Email</label>
      <Field
        as="input"
        id="email"
        v-model="values.email"
        name="email"
        type="email"
        class="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
      />
      <ErrorMessage name="email" class="text-sm text-red-600" />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium">Message</label>
      <Field
        as="textarea"
        id="message"
        v-model="values.message"
        name="message"
        class="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
        rows="5"
      />
      <ErrorMessage name="message" class="text-sm text-red-600" />
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

const { values, errors, isSubmitting, onSubmit } = useContactForm()
</script>
