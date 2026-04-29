<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check, Eye, EyeOff } from 'lucide-vue-next'

interface Props {
  code: string
  language?: string
}

const props = withDefaults(defineProps<Props>(), { language: 'vue' })

const raw = ref(false)
const copied = ref(false)

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <div class="rounded-lg border bg-muted/50 overflow-hidden">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-2 border-b bg-muted/70">
      <span class="text-sm font-mono text-muted-foreground">{{ language }}</span>
      <div class="flex gap-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              size="sm"
              variant="ghost"
              @click="raw = !raw"
              class="h-8 w-8 p-0"
            >
              <Eye v-if="!raw" class="h-4 w-4" />
              <EyeOff v-else class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{{ raw ? 'Hide' : 'Show' }} raw</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              size="sm"
              variant="ghost"
              @click="copyToClipboard"
              class="h-8 w-8 p-0"
            >
              <Check v-if="copied" class="h-4 w-4 text-green-600" />
              <Copy v-else class="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{{ copied ? 'Copied!' : 'Copy' }}</TooltipContent>
        </Tooltip>
      </div>
    </div>

    <!-- Body -->
    <div class="p-4 font-mono text-sm max-h-96 overflow-auto">
      <textarea
        v-if="raw"
        :value="code"
        readonly
        class="w-full bg-transparent font-mono text-sm border-none outline-none resize-none"
        :rows="code.split('\n').length + 1"
      />
      <pre v-else class="whitespace-pre-wrap"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>
