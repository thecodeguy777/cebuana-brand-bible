<template>
  <div class="card bg-base-100 shadow-xl mb-8">
    <div class="card-body">
      <h3 v-if="title" class="card-title text-2xl mb-4">{{ title }}</h3>
      <p v-if="description" class="text-base-content/70 mb-6">{{ description }}</p>

      <!-- Preview Area -->
      <div class="bg-base-200 rounded-lg p-8 mb-4">
        <slot name="preview"></slot>
      </div>

      <!-- Code Block (optional) -->
      <div v-if="code || $slots.code" class="mt-4">
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" checked />
          <div class="collapse-title font-medium flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            Code
          </div>
          <div class="collapse-content">
            <slot name="code">
              <CodeBlock v-if="code" :code="code" :language="language" />
            </slot>
          </div>
        </div>
      </div>

      <!-- Design Specs (optional) -->
      <div v-if="$slots.specs" class="mt-6 p-4 bg-info/10 rounded-lg">
        <h4 class="font-semibold mb-2 flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Design Specifications
        </h4>
        <slot name="specs"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeBlock from './CodeBlock.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'html'
  }
})
</script>
