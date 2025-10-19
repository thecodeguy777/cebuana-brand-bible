<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Navigation</h1>
    <p class="body-large text-base-content/70 mb-12">
      Navigation patterns and components from Cebuana Lhuillier's website. Consistent navigation ensures users can easily find services and information across all platforms.
    </p>

    <!-- Top Bar Navigation -->
    <ComponentPreview
      title="Top Bar (Utility Navigation)"
      description="Secondary navigation bar with utility links and social media icons. Dark navy background (#0C3558) with white text."
      :code="topBarCode"
      language="html"
    >
      <template #preview>
        <div class="w-full rounded-lg overflow-hidden shadow-lg">
          <div class="flex items-center justify-between px-6 py-3" style="background-color: #0C3558; color: #FFFFFF;">
            <div class="flex gap-6">
              <a href="#" class="text-sm hover:underline transition-all">About Us</a>
              <a href="#" class="text-sm hover:underline transition-all">Contact Us</a>
              <a href="#" class="text-sm hover:underline transition-all">Follow Us</a>
            </div>
            <div class="flex gap-4">
              <a href="#" class="hover:opacity-75 transition-opacity">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="hover:opacity-75 transition-opacity">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" class="hover:opacity-75 transition-opacity">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="hover:opacity-75 transition-opacity">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Main Header Navigation -->
    <ComponentPreview
      title="Main Header Navigation"
      description="Primary navigation with logo, menu items with dropdown indicators, and prominent CTA button. White background with Cebuana brand colors."
      :code="mainHeaderCode"
      language="html"
    >
      <template #preview>
        <div class="w-full rounded-lg overflow-hidden shadow-lg bg-white">
          <div class="flex items-center justify-between px-6 py-4">
            <!-- Logo -->
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: #003366;">
                <span class="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <div class="font-bold text-lg" style="color: #003366;">CEBUANA <span style="color: #E94B35;">LHUILLIER</span></div>
              </div>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center gap-6">
              <div class="dropdown dropdown-hover">
                <div tabindex="0" role="button" class="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity" style="color: #3D4451;">
                  Services
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Pawning</a></li>
                  <li><a>Money Transfer</a></li>
                  <li><a>Micro Savings</a></li>
                  <li><a>Microinsurance</a></li>
                </ul>
              </div>
              <a href="#" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: #3D4451;">Promos</a>
              <div class="dropdown dropdown-hover">
                <div tabindex="0" role="button" class="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity" style="color: #3D4451;">
                  Mobile App
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
              <a href="#" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: #3D4451;">About Us</a>
              <div class="dropdown dropdown-hover">
                <div tabindex="0" role="button" class="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity" style="color: #3D4451;">
                  News and Events
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
              <div class="dropdown dropdown-hover">
                <div tabindex="0" role="button" class="flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity" style="color: #3D4451;">
                  Support
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
            </nav>

            <!-- CTA Button -->
            <button class="btn btn-sm lg:btn-md rounded-full text-white border-0 hover:opacity-90 transition-opacity" style="background-color: #E94B35;">
              Find a Branch
            </button>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Mobile Navigation -->
    <ComponentPreview
      title="Mobile Navigation (Hamburger Menu)"
      description="Responsive mobile navigation with drawer/sidebar pattern. Uses DaisyUI drawer component with hamburger icon trigger."
      :code="mobileNavCode"
      language="html"
    >
      <template #preview>
        <div class="w-full max-w-sm mx-auto">
          <div class="drawer">
            <input id="mobile-nav-demo" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <!-- Mobile Header -->
              <div class="flex items-center justify-between px-4 py-3 bg-white shadow-md rounded-lg">
                <label for="mobile-nav-demo" class="btn btn-ghost btn-circle">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </label>
                <div class="font-bold" style="color: #003366;">Cebuana Lhuillier</div>
                <div class="w-10"></div>
              </div>
            </div>
            <div class="drawer-side">
              <label for="mobile-nav-demo" aria-label="close sidebar" class="drawer-overlay"></label>
              <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li class="menu-title">Menu</li>
                <li><a>Services</a></li>
                <li><a>Promos</a></li>
                <li><a>Mobile App</a></li>
                <li><a>About Us</a></li>
                <li><a>News and Events</a></li>
                <li><a>Support</a></li>
                <li class="mt-4">
                  <button class="btn rounded-full text-white" style="background-color: #E94B35;">Find a Branch</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Footer Navigation -->
    <ComponentPreview
      title="Footer Navigation"
      description="Multi-column footer with Contact Us, Services, and Social Media sections. Uses deep navy background (#0C3558)."
      :code="footerCode"
      language="html"
    >
      <template #preview>
        <div class="w-full rounded-lg overflow-hidden shadow-lg">
          <footer class="px-8 py-12 text-white" style="background-color: #0C3558;">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <!-- Contact Us -->
              <div>
                <h3 class="font-bold text-xl mb-4">Contact Us</h3>
                <div class="space-y-2 text-sm">
                  <p><strong>Text us*:</strong></p>
                  <p>GLOBE – 09178122737</p>
                  <p>SMART – 09188122737</p>
                  <p class="text-xs opacity-75">*Text only. No voice calls.</p>
                  <p class="mt-3"><strong>Email us:</strong></p>
                  <p>cebuanacares@pjlhuillier.com</p>
                  <p class="mt-3"><strong>Call us:</strong></p>
                  <p>8779.9800 (PLDT) or 7759.9800 (Globe)</p>
                </div>
              </div>

              <!-- Services -->
              <div>
                <h3 class="font-bold text-xl mb-4">Services</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="#" class="hover:underline">Pawning</a></li>
                  <li><a href="#" class="hover:underline">Money Transfer</a></li>
                  <li><a href="#" class="hover:underline">Bank</a></li>
                  <li><a href="#" class="hover:underline">Micro Savings</a></li>
                  <li><a href="#" class="hover:underline">Microinsurance</a></li>
                  <li><a href="#" class="hover:underline">Other Services</a></li>
                </ul>
              </div>

              <!-- Follow Us -->
              <div>
                <h3 class="font-bold text-xl mb-4">Follow Us</h3>
                <div class="flex gap-4">
                  <a href="#" class="hover:opacity-75 transition-opacity">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="#" class="hover:opacity-75 transition-opacity">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" class="hover:opacity-75 transition-opacity">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" class="hover:opacity-75 transition-opacity">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Copyright -->
            <div class="text-center mt-8 pt-8 border-t border-white/10">
              <p class="text-sm opacity-75">© 2025 All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </template>
    </ComponentPreview>

    <!-- Breadcrumb Navigation -->
    <ComponentPreview
      title="Breadcrumb Navigation"
      description="Secondary navigation showing page hierarchy. Helps users understand their location in the site structure."
      :code="breadcrumbCode"
      language="html"
    >
      <template #preview>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li>Money Transfer</li>
          </ul>
        </div>
      </template>
    </ComponentPreview>

    <!-- Navigation Best Practices -->
    <ComponentPreview
      title="Navigation Best Practices"
      description="Guidelines for implementing consistent and accessible navigation across all Cebuana Lhuillier digital properties."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Do's -->
          <div class="space-y-4">
            <h3 class="font-bold text-lg flex items-center gap-2">
              <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style="background-color: #36D399;">✓</span>
              Do's
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Use consistent navigation structure across all pages</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Provide clear visual feedback for hover and active states</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Include dropdown indicators (chevrons) for menus with submenus</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Use the prominent CTA button (#E94B35 red) for primary actions</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Implement responsive mobile navigation with hamburger menu</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Ensure proper keyboard navigation and ARIA labels</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #36D399;">✓</span>
                <span>Keep footer navigation comprehensive with contact info</span>
              </li>
            </ul>
          </div>

          <!-- Don'ts -->
          <div class="space-y-4">
            <h3 class="font-bold text-lg flex items-center gap-2">
              <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style="background-color: #F87272;">✗</span>
              Don'ts
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't hide important navigation items in nested dropdowns</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't use different navigation patterns on different pages</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't overload the top navigation with too many items</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't forget to indicate the current page/section</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't use non-standard colors for navigation links</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't make dropdown menus too complex or deeply nested</span>
              </li>
              <li class="flex gap-3">
                <span style="color: #F87272;">✗</span>
                <span>Don't forget to test navigation on all device sizes</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Color Specifications -->
    <ComponentPreview
      title="Navigation Color Specifications"
      description="Official color values for navigation components based on cebuanalhuillier.com"
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-lg border border-base-300">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 rounded-lg shadow" style="background-color: #0C3558;"></div>
              <div>
                <p class="font-semibold">Top Bar & Footer</p>
                <p class="text-sm font-mono">#0C3558</p>
                <p class="text-xs text-base-content/60">Navy Blue</p>
              </div>
            </div>
          </div>
          <div class="p-4 rounded-lg border border-base-300">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 rounded-lg shadow" style="background-color: #FFFFFF; border: 1px solid #E5E5E5;"></div>
              <div>
                <p class="font-semibold">Main Header</p>
                <p class="text-sm font-mono">#FFFFFF</p>
                <p class="text-xs text-base-content/60">White</p>
              </div>
            </div>
          </div>
          <div class="p-4 rounded-lg border border-base-300">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 rounded-lg shadow" style="background-color: #E94B35;"></div>
              <div>
                <p class="font-semibold">CTA Button</p>
                <p class="text-sm font-mono">#E94B35</p>
                <p class="text-xs text-base-content/60">Lhuillier Red</p>
              </div>
            </div>
          </div>
          <div class="p-4 rounded-lg border border-base-300">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-12 h-12 rounded-lg shadow" style="background-color: #3D4451;"></div>
              <div>
                <p class="font-semibold">Link Text</p>
                <p class="text-sm font-mono">#3D4451</p>
                <p class="text-xs text-base-content/60">Dark Gray</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import ComponentPreview from '../components/layout/ComponentPreview.vue'

const topBarCode = `<!-- Top Bar with Utility Links and Social Icons -->
<div class="flex items-center justify-between px-6 py-3"
     style="background-color: #0C3558; color: #FFFFFF;">
  <div class="flex gap-6">
    <a href="#" class="text-sm hover:underline">About Us</a>
    <a href="#" class="text-sm hover:underline">Contact Us</a>
    <a href="#" class="text-sm hover:underline">Follow Us</a>
  </div>
  <div class="flex gap-4">
    <!-- Social icons here -->
  </div>
</div>`

const mainHeaderCode = `<!-- Main Navigation Header -->
<div class="flex items-center justify-between px-6 py-4 bg-white">
  <!-- Logo -->
  <div class="flex items-center gap-2">
    <img src="logo.png" alt="Cebuana Lhuillier" class="h-10">
  </div>

  <!-- Desktop Navigation -->
  <nav class="hidden lg:flex items-center gap-6">
    <div class="dropdown dropdown-hover">
      <div tabindex="0" role="button"
           class="flex items-center gap-1 text-sm font-medium"
           style="color: #3D4451;">
        Services
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Pawning</a></li>
        <li><a>Money Transfer</a></li>
      </ul>
    </div>
    <a href="#" class="text-sm font-medium" style="color: #3D4451;">Promos</a>
    <!-- More nav items... -->
  </nav>

  <!-- CTA Button -->
  <button class="btn rounded-full text-white" style="background-color: #E94B35;">
    Find a Branch
  </button>
</div>`

const mobileNavCode = `<!-- Mobile Navigation with Drawer -->
<div class="drawer">
  <input id="mobile-nav" type="checkbox" class="drawer-toggle" />

  <div class="drawer-content">
    <div class="flex items-center justify-between px-4 py-3">
      <label for="mobile-nav" class="btn btn-ghost btn-circle">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </label>
      <div class="font-bold">Cebuana Lhuillier</div>
    </div>
  </div>

  <div class="drawer-side">
    <label for="mobile-nav" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <li><a>Services</a></li>
      <li><a>Promos</a></li>
      <li><a>About Us</a></li>
    </ul>
  </div>
</div>`

const footerCode = `<!-- Footer Navigation -->
<footer class="px-8 py-12 text-white" style="background-color: #0C3558;">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Contact Us -->
    <div>
      <h3 class="font-bold text-xl mb-4">Contact Us</h3>
      <p>Text us: GLOBE – 09178122737</p>
      <p>Email: cebuanacares@pjlhuillier.com</p>
    </div>

    <!-- Services -->
    <div>
      <h3 class="font-bold text-xl mb-4">Services</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">Pawning</a></li>
        <li><a href="#" class="hover:underline">Money Transfer</a></li>
      </ul>
    </div>

    <!-- Follow Us -->
    <div>
      <h3 class="font-bold text-xl mb-4">Follow Us</h3>
      <!-- Social icons -->
    </div>
  </div>

  <div class="text-center mt-8 pt-8 border-t border-white/10">
    <p class="text-sm">© 2025 All Rights Reserved.</p>
  </div>
</footer>`

const breadcrumbCode = `<!-- Breadcrumb Navigation -->
<div class="text-sm breadcrumbs">
  <ul>
    <li><a>Home</a></li>
    <li><a>Services</a></li>
    <li>Money Transfer</li>
  </ul>
</div>`
</script>

<style scoped>
/* Navigation styles are handled by DaisyUI and inline styles */
</style>
