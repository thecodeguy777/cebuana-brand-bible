<template>
  <div class="drawer lg:drawer-open">
    <input id="sidebar-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar for mobile -->
      <div class="w-full navbar bg-base-300 lg:hidden">
        <div class="flex-none">
          <label for="sidebar-drawer" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Cebuana Brand Bible</div>
      </div>

      <!-- Page content -->
      <div class="p-6 lg:p-10">
        <slot></slot>
      </div>
    </div>

    <div class="drawer-side">
      <label for="sidebar-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <aside class="bg-base-200 w-80 min-h-full">
        <!-- Logo / Header -->
        <div class="sticky top-0 z-20 bg-base-200 bg-opacity-90 backdrop-blur py-6 px-6 shadow-sm">
          <router-link to="/home" class="flex items-center gap-2">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <div class="font-bold text-lg">Cebuana Lhuillier</div>
              <div class="text-xs text-base-content/60">Brand Bible</div>
            </div>
          </router-link>
        </div>

        <!-- Search Button -->
        <div class="px-4 py-3">
          <button @click="openSearch" class="search-trigger">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span class="flex-1 text-left">Search...</span>
            <kbd class="search-kbd">⌘K</kbd>
          </button>
        </div>

        <!-- Navigation Menu -->
        <ul class="menu w-full px-4 py-2 space-y-1">
          <li>
            <router-link to="/home" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Overview
            </router-link>
          </li>

          <li class="menu-title">
            <span>Foundation</span>
          </li>
          <li>
            <router-link to="/typography" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              Typography
            </router-link>
          </li>
          <li>
            <router-link to="/colors" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
              Colors
            </router-link>
          </li>
          <li>
            <router-link to="/grid" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
              </svg>
              Grid System
            </router-link>
          </li>

          <li class="menu-title">
            <span>Components</span>
          </li>
          <li>
            <router-link to="/buttons" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
              </svg>
              Buttons
            </router-link>
          </li>
          <li>
            <router-link to="/forms" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Forms & Lists
            </router-link>
          </li>
          <li>
            <router-link to="/modals" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Modals
            </router-link>
          </li>
          <li>
            <router-link to="/icons" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Icons
            </router-link>
          </li>
          <li>
            <router-link to="/cards" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Cards
            </router-link>
          </li>
          <li>
            <router-link to="/components" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Components Demo
            </router-link>
          </li>

          <li class="menu-title">
            <span>Pages</span>
          </li>
          <li>
            <router-link to="/navigation" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              Navigation
            </router-link>
          </li>
          <li>
            <router-link to="/pinpad" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Pin Pad
            </router-link>
          </li>
          <li>
            <router-link to="/backoffice" class="gap-4" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
              </svg>
              Back Office Login
            </router-link>
          </li>
        </ul>

      </aside>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// Inject the openSearch function from parent (App.vue will provide it)
const openSearch = inject('openSearch', () => {
  // Fallback: trigger Ctrl+K event if inject doesn't work
  const event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    ctrlKey: true,
    bubbles: true
  })
  window.dispatchEvent(event)
})
</script>

<style scoped>
/* Active link styling handled by DaisyUI's active class */

/* Menu Items - Full Width */
.menu :deep(li) {
  width: 100%;
}

.menu :deep(a) {
  width: 100%;
  display: flex;
  align-items: center;
}

/* Search Trigger Button */
.search-trigger {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 14px;
  background: rgba(0, 51, 102, 0.05);
  border: 1px solid rgba(0, 51, 102, 0.1);
  border-radius: 8px;
  color: #3D4451;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-trigger:hover {
  background: rgba(0, 51, 102, 0.1);
  border-color: rgba(0, 51, 102, 0.2);
}

.search-kbd {
  background: rgba(0, 51, 102, 0.1);
  border: 1px solid rgba(0, 51, 102, 0.15);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 11px;
  font-family: monospace;
  color: #003366;
  font-weight: 600;
}
</style>
