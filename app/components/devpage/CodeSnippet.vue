<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check, Eye, EyeOff } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const props = defineProps<{
  code: string
  language?: string
}>()

const isCopied = ref(false)
const isRaw = ref(false)

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    toast.success('Copied to clipboard!')
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    toast.error('Failed to copy')
  }
}
</script>

<template>
  <div class="rounded-lg border bg-muted/50 overflow-hidden">
    <div class="flex items-center justify-between px-4 py-2 border-b bg-muted/70">
      <span class="text-sm font-mono font-semibold text-foreground">{{ language || 'vue' }}</span>
      <div class="flex gap-1">
        <button
          @click="isRaw = !isRaw"
          class="p-1.5 rounded hover:bg-muted/50 transition-colors cursor-pointer"
          :title="isRaw ? 'Hide raw' : 'Show raw'"
        >
          <Eye v-if="!isRaw" class="h-4 w-4 text-muted-foreground hover:text-foreground" />
          <EyeOff v-else class="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </button>
        <button
          @click="copyToClipboard"
          class="p-1.5 rounded hover:bg-muted/50 transition-colors cursor-pointer"
          :title="isCopied ? 'Copied!' : 'Copy code'"
        >
          <Check v-if="isCopied" class="h-4 w-4 text-green-500" />
          <Copy v-else class="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </button>
      </div>
    </div>
    <div class="p-4 font-mono text-xs max-h-96 overflow-auto bg-background">
      <pre v-if="!isRaw" class="whitespace-pre-wrap"><code>{{ code }}</code></pre>
      <textarea v-else readonly class="w-full h-64 p-2 bg-background border-0 resize-none focus:outline-none font-mono text-xs">{{ code }}</textarea>
    </div>
  </div>
</template>
