<script setup>
import { ref, provide, computed } from 'vue'
import { useRoute } from 'vue-router'
import SideNav from './components/layout/SideNav.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
import SearchModal from './components/layout/SearchModal.vue'

const route = useRoute()
const searchModal = ref(null)

const openSearch = () => {
  searchModal.value?.open()
}

// Routes that should hide the SideNav
const hideSideNavRoutes = ['BankingLanding']
const shouldHideSideNav = computed(() => hideSideNavRoutes.includes(route.name))

// Provide openSearch to child components
provide('openSearch', openSearch)
</script>

<template>
  <div data-theme="cebuana" class="min-h-screen bg-base-100 text-base-content">
    <SideNav v-if="!shouldHideSideNav">
      <router-view />
    </SideNav>
    <router-view v-else />
    <ScrollToTop />
    <SearchModal ref="searchModal" />
  </div>
</template>

<style scoped>
/* Add global styles if needed */
</style>
