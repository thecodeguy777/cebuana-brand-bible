<template>
  <div class="mockup-code bg-neutral text-neutral-content relative group">
    <button
      @click="copyCode"
      class="absolute top-2 right-2 btn btn-xs btn-ghost opacity-0 group-hover:opacity-100 transition-opacity"
      :class="{ 'btn-success': copied }"
    >
      <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
      <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
    <pre v-for="(line, index) in codeLines" :key="index" :data-prefix="index + 1"><code>{{ line }}</code></pre>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'html'
  }
})

const copied = ref(false)

const codeLines = computed(() => {
  return props.code.trim().split('\n')
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code.trim())
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>
