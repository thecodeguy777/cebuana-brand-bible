<script setup>
import SideNav from './components/layout/SideNav.vue'
</script>

<template>
  <div data-theme="cebuana" class="min-h-screen bg-base-100 text-base-content">
    <SideNav>
      <router-view />
    </SideNav>
  </div>
</template>

<style scoped>
/* Add global styles if needed */
</style>
