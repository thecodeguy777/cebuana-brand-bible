<template>
  <div class="drawer lg:drawer-open" :style="{ '--sidebar-width': isCollapsed ? '80px' : '320px' }">
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
      <aside :class="['bg-base-200 min-h-full transition-all duration-300 ease-in-out', isCollapsed ? 'w-20' : 'w-80']">
        <!-- Logo / Header -->
        <div :class="['sticky top-0 z-20 bg-base-200 bg-opacity-90 backdrop-blur py-6 shadow-sm header-accent', isCollapsed ? 'px-3' : 'px-6']" :style="{ '--scroll-progress': `${scrollProgress}%` }">
          <div :class="['flex items-center', isCollapsed ? 'justify-center' : 'justify-between']">
            <router-link v-if="!isCollapsed" to="/home" class="flex items-center gap-2">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <div class="font-bold text-lg">Cebuana Lhuillier</div>
                <div class="text-xs text-base-content/60">Brand Bible</div>
              </div>
            </router-link>
            <router-link v-else to="/home" class="flex items-center justify-center">
              <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">C</span>
              </div>
            </router-link>
          </div>
          <!-- Toggle Button -->
          <button v-if="!isCollapsed" @click="toggleSidebar" class="collapse-btn hidden lg:flex accent-hover" :title="'Collapse sidebar'">
            <svg class="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
            </svg>
          </button>
          <button v-else @click="toggleSidebar" class="collapse-btn-collapsed hidden lg:flex accent-hover" :title="'Expand sidebar'">
            <svg class="w-4 h-4 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
            </svg>
          </button>
        </div>

        <!-- Search Button -->
        <div v-if="!isCollapsed" class="px-4 py-3">
          <button @click="openSearch" class="search-trigger">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span class="flex-1 text-left">Search...</span>
            <kbd class="search-kbd">⌘K</kbd>
          </button>
        </div>
        <div v-else class="px-4 py-3 flex justify-center">
          <button @click="openSearch" class="btn btn-ghost btn-sm btn-square" title="Search (⌘K)">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>

        <!-- Navigation Menu -->
        <ul :class="['menu w-full py-2 space-y-1', isCollapsed ? 'px-2' : 'px-4']">
          <li>
            <router-link to="/home" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Overview' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <span v-if="!isCollapsed">Overview</span>
            </router-link>
          </li>

          <li v-if="!isCollapsed" class="menu-title">
            <span>Foundation</span>
          </li>
          <li v-else class="divider my-2"></li>

          <li>
            <router-link to="/typography" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Typography' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              <span v-if="!isCollapsed">Typography</span>
            </router-link>
          </li>
          <li>
            <router-link to="/colors" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Colors' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
              <span v-if="!isCollapsed">Colors</span>
            </router-link>
          </li>
          <li>
            <router-link to="/grid" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Grid System' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
              </svg>
              <span v-if="!isCollapsed">Grid System</span>
            </router-link>
          </li>

          <li v-if="!isCollapsed" class="menu-title">
            <span>Components</span>
          </li>
          <li v-else class="divider my-2"></li>

          <li>
            <router-link to="/buttons" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Buttons' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
              </svg>
              <span v-if="!isCollapsed">Buttons</span>
            </router-link>
          </li>
          <li>
            <router-link to="/forms" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Forms & Lists' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span v-if="!isCollapsed">Forms & Lists</span>
            </router-link>
          </li>
          <li>
            <router-link to="/modals" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Modals' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              <span v-if="!isCollapsed">Modals</span>
            </router-link>
          </li>
          <li>
            <router-link to="/icons" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Icons' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span v-if="!isCollapsed">Icons</span>
            </router-link>
          </li>
          <li>
            <router-link to="/cards" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Cards' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              <span v-if="!isCollapsed">Cards</span>
            </router-link>
          </li>
          <li>
            <router-link to="/components" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Components Demo' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span v-if="!isCollapsed">Components Demo</span>
            </router-link>
          </li>

          <li v-if="!isCollapsed" class="menu-title">
            <span>Pages</span>
          </li>
          <li v-else class="divider my-2"></li>

          <li>
            <router-link to="/navigation" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Navigation' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span v-if="!isCollapsed">Navigation</span>
            </router-link>
          </li>
          <li>
            <router-link to="/pinpad" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Pin Pad' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <span v-if="!isCollapsed">Pin Pad</span>
            </router-link>
          </li>
          <li>
            <router-link to="/backoffice" :class="isCollapsed ? 'tooltip tooltip-right px-0 justify-center' : 'gap-4'" :data-tip="isCollapsed ? 'Back Office Login' : ''" active-class="active">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
              </svg>
              <span v-if="!isCollapsed">Back Office Login</span>
            </router-link>
          </li>
        </ul>

      </aside>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

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

// Collapsible sidebar state
const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

// Scroll progress tracking
const scrollProgress = ref(0)

const updateScrollProgress = () => {
  // Try to find the main content scrollable area
  const drawerContent = document.querySelector('.drawer-content')

  let scrollTop, scrollHeight, clientHeight

  // Check if drawer-content has scroll
  if (drawerContent && drawerContent.scrollHeight > drawerContent.clientHeight) {
    scrollTop = drawerContent.scrollTop
    scrollHeight = drawerContent.scrollHeight
    clientHeight = drawerContent.clientHeight
  } else {
    // Fallback to window scroll
    scrollTop = window.scrollY || document.documentElement.scrollTop
    scrollHeight = document.documentElement.scrollHeight
    clientHeight = window.innerHeight
  }

  const totalScrollable = scrollHeight - clientHeight
  const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0
  scrollProgress.value = Math.min(100, Math.max(0, progress))
}

onMounted(() => {
  // Listen to both window and drawer-content scroll events
  window.addEventListener('scroll', updateScrollProgress, { passive: true })

  const drawerContent = document.querySelector('.drawer-content')
  if (drawerContent) {
    drawerContent.addEventListener('scroll', updateScrollProgress, { passive: true })
  }

  // Initial calculation
  setTimeout(updateScrollProgress, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)

  const drawerContent = document.querySelector('.drawer-content')
  if (drawerContent) {
    drawerContent.removeEventListener('scroll', updateScrollProgress)
  }
})
</script>

<style>
/* Global styles for drawer behavior - must be unscoped */
@media (min-width: 1024px) {
  /* Remove DaisyUI's default fixed 320px margin */
  .drawer.lg\:drawer-open > .drawer-content {
    margin-left: 0 !important;
  }

  /* Add our dynamic padding based on sidebar width */
  .drawer.lg\:drawer-open .drawer-content {
    padding-left: var(--sidebar-width, 320px) !important;
    transition: padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  /* Make sidebar fixed position */
  .drawer.lg\:drawer-open .drawer-side {
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    bottom: 0 !important;
    z-index: 10 !important;
  }

  .drawer.lg\:drawer-open .drawer-side > aside {
    position: relative !important;
  }
}
</style>

<style scoped>
/* Active link styling handled by DaisyUI's active class */

/* Sidebar Transitions */
aside {
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-x: hidden;
}

/* Header Accent Border */
.header-accent {
  border-bottom: 2px solid rgba(233, 75, 53, 0.15);
  position: relative;
}

.header-accent::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: var(--scroll-progress, 0%);
  height: 3px;
  background: linear-gradient(90deg, #003366 0%, #0C3558 50%, #E94B35 100%);
  transition: width 0.15s ease-out;
  box-shadow: 0 0 10px rgba(0, 51, 102, 0.5);
}

/* Menu Items - Full Width */
.menu :deep(li) {
  width: 100%;
}

.menu :deep(a) {
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

/* Collapsed Menu Items */
.menu :deep(a.justify-center) {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* Text transitions */
span {
  transition: opacity 0.2s ease;
}

/* Divider for collapsed state */
.divider {
  height: 1px;
  background: linear-gradient(90deg, #E94B35 0%, rgba(0, 51, 102, 0.1) 30%, transparent 100%);
}

/* Menu Titles with Accent */
.menu :deep(.menu-title) {
  position: relative;
  padding-left: 8px;
}

.menu :deep(.menu-title)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 12px;
  background: linear-gradient(180deg, #003366 0%, #E94B35 100%);
  border-radius: 2px;
}

/* Collapse Button - Expanded State */
.collapse-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  background: rgba(0, 51, 102, 0.05);
  border: 1px solid rgba(0, 51, 102, 0.1);
  border-radius: 6px;
  color: #003366;
  cursor: pointer;
  transition: all 0.2s ease;
  align-items: center;
  justify-content: center;
}

.collapse-btn:hover {
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.1) 0%, rgba(233, 75, 53, 0.1) 100%);
  border: 2px solid;
  border-image: linear-gradient(135deg, #003366 0%, #E94B35 100%) 1;
  color: #E94B35;
}

.collapse-btn svg {
  transition: transform 0.3s ease;
}

/* Collapse Button - Collapsed State */
.collapse-btn-collapsed {
  width: 100%;
  margin-top: 12px;
  padding: 6px;
  background: rgba(0, 51, 102, 0.05);
  border: 1px solid rgba(0, 51, 102, 0.1);
  border-radius: 6px;
  color: #003366;
  cursor: pointer;
  transition: all 0.2s ease;
  align-items: center;
  justify-content: center;
}

.collapse-btn-collapsed:hover {
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.1) 0%, rgba(233, 75, 53, 0.1) 100%);
  border: 2px solid;
  border-image: linear-gradient(135deg, #003366 0%, #E94B35 100%) 1;
  color: #E94B35;
}

/* Active Navigation Items with Accent Color */
.menu :deep(.active) {
  background: linear-gradient(90deg, rgba(0, 51, 102, 0.05) 0%, rgba(233, 75, 53, 0.05) 100%);
  border-left: 3px solid;
  border-image: linear-gradient(180deg, #003366 0%, #E94B35 100%) 1;
  color: #003366;
}

.menu :deep(.active):hover {
  background: linear-gradient(90deg, rgba(0, 51, 102, 0.1) 0%, rgba(233, 75, 53, 0.1) 100%);
  color: #E94B35;
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
  border-left: 3px solid transparent;
  border-radius: 8px;
  color: #3D4451;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-trigger:hover {
  background: linear-gradient(90deg, rgba(0, 51, 102, 0.08) 0%, rgba(233, 75, 53, 0.05) 100%);
  border-color: rgba(0, 51, 102, 0.2);
  border-left-width: 3px;
  border-left-style: solid;
  border-image: linear-gradient(180deg, #003366 0%, #E94B35 100%) 1;
}

.search-trigger:focus {
  outline: none;
  border-left-width: 3px;
  border-left-style: solid;
  border-image: linear-gradient(180deg, #003366 0%, #E94B35 100%) 1;
  box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
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

/* Tooltip customization for collapsed state */
:deep(.tooltip):before {
  white-space: nowrap;
}
</style>
