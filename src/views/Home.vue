<template>
  <div class="max-w-5xl">
    <!-- Hero Section -->
    <div class="mb-12">
      <h1 class="heading-1 mb-4">Cebuana Lhuillier Bank</h1>
      <h2 class="heading-3 text-primary mb-6">Corporate Internet Banking UI/UX Baseline</h2>
      <p class="body-large text-base-content/70 max-w-3xl">
        This brand bible establishes a consistent UI/UX baseline for Corporate Internet Banking.
        Standardizing core design components to ensure a uniform look and feel across the platform
        that strengthens brand identity.
      </p>
    </div>

    <!-- Stats -->
    <div class="stats shadow w-full mb-12">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
          </svg>
        </div>
        <div class="stat-title">Job Order</div>
        <div class="stat-value text-primary">#77</div>
        <div class="stat-desc">Product Management Digital</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-accent">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </div>
        <div class="stat-title">Components</div>
        <div class="stat-value text-accent">50+</div>
        <div class="stat-desc">UI Elements</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <div class="stat-title">Categories</div>
        <div class="stat-value">9</div>
        <div class="stat-desc">Design Systems</div>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="mb-12">
      <h3 class="heading-4 mb-6">Foundation</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <router-link to="/typography" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              Typography
            </h2>
            <p class="text-sm">Font styles, sizes, and hierarchy for readability and brand alignment</p>
          </div>
        </router-link>

        <router-link to="/colors" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
              Colors
            </h2>
            <p class="text-sm">Brand color palette with blue primary and red accent</p>
          </div>
        </router-link>

        <router-link to="/grid" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
              </svg>
              Grid System
            </h2>
            <p class="text-sm">Responsive layout grid and spacing guidelines</p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Components Grid -->
    <div>
      <h3 class="heading-4 mb-6">Components</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <router-link to="/grid" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Grid System</h2>
            <p class="text-xs">Responsive layout grid and spacing guidelines</p>
          </div>
        </router-link>

        <router-link to="/buttons" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Buttons</h2>
            <p class="text-xs">Primary, Secondary, Tertiary, Radio, Checkbox, Switch</p>
          </div>
        </router-link>

        <router-link to="/forms" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Forms & Lists</h2>
            <p class="text-xs">Standard layouts and input treatments</p>
          </div>
        </router-link>

        <router-link to="/modals" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Modals</h2>
            <p class="text-xs">System messages, alerts, and error handling</p>
          </div>
        </router-link>

        <router-link to="/components" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Components Demo</h2>
            <p class="text-xs">Live examples of all UI components</p>
          </div>
        </router-link>

        <router-link to="/icons" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Icons</h2>
            <p class="text-xs">Consistent iconography for navigation and functions</p>
          </div>
        </router-link>

        <router-link to="/cards" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Cards</h2>
            <p class="text-xs">Premium account cards, transactions, and alerts</p>
          </div>
        </router-link>

        <router-link to="/navigation" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Navigation</h2>
            <p class="text-xs">Side navigation bar for back office</p>
          </div>
        </router-link>

        <router-link to="/pinpad" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Pin Pad</h2>
            <p class="text-xs">Virtual pin pad for secure authentication</p>
          </div>
        </router-link>

        <router-link to="/backoffice" class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div class="card-body">
            <h2 class="card-title text-lg">Back Office</h2>
            <p class="text-xs">Login page and administrator interface</p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Purpose Section -->
    <div class="mt-12 p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
      <h3 class="heading-5 mb-4">Purpose</h3>
      <ul class="list-disc list-inside space-y-2 text-base-content/80">
        <li>Ensure a uniform look and feel across the platform that strengthens brand identity</li>
        <li>Reduce design and development inconsistencies, leading to faster delivery and easier maintenance</li>
        <li>Provide a foundation for future enhancements and scalability of the platform</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Cebuana Lhuillier Brand Bible Home Page
</script>
