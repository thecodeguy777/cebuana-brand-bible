<template>
  <transition name="modal">
    <div v-if="isOpen" class="search-modal-overlay" @click.self="close">
      <div class="search-modal">
        <!-- Search Input -->
        <div class="search-input-wrapper">
          <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            ref="searchInput"
            v-model="query"
            type="text"
            placeholder="Search documentation... (Ctrl+K)"
            class="search-input"
            @keydown.down.prevent="moveSelection(1)"
            @keydown.up.prevent="moveSelection(-1)"
            @keydown.enter.prevent="selectResult"
            @keydown.esc="close"
          />
          <kbd class="keyboard-hint">ESC</kbd>
        </div>

        <!-- Search Results -->
        <div v-if="query" class="search-results">
          <div v-if="results.length === 0" class="no-results">
            <svg class="w-12 h-12 mx-auto mb-2 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-base-content/60">No results found for "{{ query }}"</p>
          </div>

          <div v-else class="results-list">
            <div
              v-for="(result, index) in results"
              :key="result.item.id"
              class="result-item"
              :class="{ 'selected': index === selectedIndex }"
              @click="navigateTo(result.item.path)"
              @mouseenter="selectedIndex = index"
            >
              <div class="result-content">
                <div class="result-category">{{ result.item.category }}</div>
                <div class="result-title">{{ result.item.title }}</div>
              </div>
              <svg class="result-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <svg class="w-16 h-16 mx-auto mb-4 text-base-content/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <p class="text-base-content/60 text-sm">Search for pages, components, colors, and more...</p>
          <div class="quick-links">
            <button @click="navigateTo('/typography')" class="quick-link">Typography</button>
            <button @click="navigateTo('/colors')" class="quick-link">Colors</button>
            <button @click="navigateTo('/buttons')" class="quick-link">Buttons</button>
            <button @click="navigateTo('/navigation')" class="quick-link">Navigation</button>
          </div>
        </div>

        <!-- Footer -->
        <div class="search-footer">
          <div class="keyboard-shortcuts">
            <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { searchIndex } from '../../data/searchIndex'

const router = useRouter()
const isOpen = ref(false)
const query = ref('')
const results = ref([])
const selectedIndex = ref(0)
const searchInput = ref(null)

// Fuse.js configuration
const fuse = new Fuse(searchIndex, {
  keys: ['title', 'keywords', 'category'],
  threshold: 0.3,
  includeScore: true
})

// Watch query changes and perform search
watch(query, (newQuery) => {
  if (newQuery) {
    results.value = fuse.search(newQuery).slice(0, 8)
    selectedIndex.value = 0
  } else {
    results.value = []
  }
})

// Keyboard shortcut handler
const handleKeydown = (e) => {
  // Ctrl+K or Cmd+K
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault()
    toggle()
  }
}

const open = () => {
  isOpen.value = true
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const close = () => {
  isOpen.value = false
  query.value = ''
  results.value = []
  selectedIndex.value = 0
}

const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

const moveSelection = (direction) => {
  if (results.value.length === 0) return

  selectedIndex.value = (selectedIndex.value + direction + results.value.length) % results.value.length
}

const selectResult = () => {
  if (results.value.length > 0 && results.value[selectedIndex.value]) {
    navigateTo(results.value[selectedIndex.value].item.path)
  }
}

const navigateTo = (path) => {
  router.push(path)
  close()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Expose open method for external use
defineExpose({ open })
</script>

<style scoped>
.search-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  z-index: 9999;
}

.search-modal {
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 90%;
  max-width: 600px;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Search Input */
.search-input-wrapper {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #E5E5E5;
  gap: 12px;
}

.search-icon {
  width: 24px;
  height: 24px;
  color: #003366;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  color: #003366;
  background: transparent;
}

.search-input::placeholder {
  color: #A0A0A0;
}

.keyboard-hint {
  background: #F2F2F2;
  border: 1px solid #E5E5E5;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  font-family: monospace;
  color: #3D4451;
}

/* Results */
.search-results {
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
}

.results-list {
  padding: 8px;
}

.result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.result-item:hover,
.result-item.selected {
  background: #F2F2F2;
}

.result-content {
  flex: 1;
}

.result-category {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #E94B35;
  font-weight: 600;
  margin-bottom: 2px;
}

.result-title {
  font-size: 15px;
  font-weight: 500;
  color: #003366;
}

.result-arrow {
  width: 16px;
  height: 16px;
  color: #A0A0A0;
  flex-shrink: 0;
}

/* Empty State */
.empty-state {
  padding: 48px 24px;
  text-align: center;
}

.quick-links {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  flex-wrap: wrap;
}

.quick-link {
  background: #F2F2F2;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 13px;
  color: #003366;
  cursor: pointer;
  transition: all 0.15s ease;
}

.quick-link:hover {
  background: #003366;
  color: white;
  border-color: #003366;
}

/* No Results */
.no-results {
  padding: 48px 24px;
  text-align: center;
}

/* Footer */
.search-footer {
  border-top: 1px solid #E5E5E5;
  padding: 12px 24px;
  background: #FAFAFA;
}

.keyboard-shortcuts {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: #666;
  justify-content: center;
}

.keyboard-shortcuts kbd {
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  padding: 2px 6px;
  font-family: monospace;
  font-size: 11px;
  margin: 0 2px;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .search-modal,
.modal-leave-active .search-modal {
  transition: transform 0.2s ease;
}

.modal-enter-from .search-modal,
.modal-leave-to .search-modal {
  transform: translateY(-20px);
}
</style>
