<script setup>
import { ref, provide } from 'vue'
import SideNav from './components/layout/SideNav.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
import SearchModal from './components/layout/SearchModal.vue'

const searchModal = ref(null)

const openSearch = () => {
  searchModal.value?.open()
}

// Provide openSearch to child components
provide('openSearch', openSearch)
</script>

<template>
  <div data-theme="cebuana" class="min-h-screen bg-base-100 text-base-content">
    <SideNav>
      <router-view />
    </SideNav>
    <ScrollToTop />
    <SearchModal ref="searchModal" />
  </div>
</template>

<style scoped>
/* Add global styles if needed */
</style>
