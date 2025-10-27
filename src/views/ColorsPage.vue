<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Colors</h1>
    <p class="body-large text-base-content/70 mb-12">
      Official Cebuana Lhuillier brand color palette from their website cebuanalhuillier.com. Deep blue conveys trust and professionalism, while vivid red creates visual impact and energy.
    </p>

    <!-- Primary Colors -->
    <ComponentPreview
      title="Primary Brand Colors"
      description="Official colors from Cebuana Lhuillier's logo and website identity."
    >
      <template #preview>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="w-24 h-24 rounded-full shadow-lg mx-auto" style="background-color: #003366;"></div>
            <div class="text-center">
              <p class="font-semibold">Primary</p>
              <p class="text-sm text-base-content/60">#003366</p>
              <p class="text-xs text-base-content/50">Cebuana Blue (Logo)</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 rounded-full shadow-lg mx-auto" style="background-color: #0C3558;"></div>
            <div class="text-center">
              <p class="font-semibold">Secondary</p>
              <p class="text-sm text-base-content/60">#0C3558</p>
              <p class="text-xs text-base-content/50">Navy Blue (Footer)</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 rounded-full shadow-lg mx-auto" style="background-color: #E94B35;"></div>
            <div class="text-center">
              <p class="font-semibold">Accent</p>
              <p class="text-sm text-base-content/60">#E94B35</p>
              <p class="text-xs text-base-content/50">Lhuillier Red (Logo)</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 rounded-full shadow-lg mx-auto" style="background-color: #3D4451;"></div>
            <div class="text-center">
              <p class="font-semibold">Neutral</p>
              <p class="text-sm text-base-content/60">#3D4451</p>
              <p class="text-xs text-base-content/50">Dark Gray</p>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Semantic Colors -->
    <ComponentPreview
      title="Semantic Colors"
      description="Colors that communicate status, feedback, and information to users."
    >
      <template #preview>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="space-y-2">
            <div class="w-24 h-24 bg-success rounded-full shadow-lg mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Success</p>
              <p class="text-sm text-base-content/60">#36D399</p>
              <p class="text-xs text-base-content/50">Positive actions</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 bg-warning rounded-full shadow-lg mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Warning</p>
              <p class="text-sm text-base-content/60">#FBBD23</p>
              <p class="text-xs text-base-content/50">Caution states</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 bg-error rounded-full shadow-lg mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Error</p>
              <p class="text-sm text-base-content/60">#F87272</p>
              <p class="text-xs text-base-content/50">Errors, failures</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 bg-info rounded-full shadow-lg mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Info</p>
              <p class="text-sm text-base-content/60">#3ABFF8</p>
              <p class="text-xs text-base-content/50">Information</p>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Base Colors -->
    <ComponentPreview
      title="Base / Background Colors"
      description="Background and surface colors from Cebuana's website - white primary, subtle gray variations."
    >
      <template #preview>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <div class="w-24 h-24 bg-base-100 rounded-full shadow-lg border border-base-300 mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Base 100</p>
              <p class="text-sm text-base-content/60">#FFFFFF</p>
              <p class="text-xs text-base-content/50">White - main background</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 bg-base-200 rounded-full shadow-lg mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Base 200</p>
              <p class="text-sm text-base-content/60">#F2F2F2</p>
              <p class="text-xs text-base-content/50">Light gray - subtle backgrounds</p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-24 h-24 bg-base-300 rounded-full shadow-lg mx-auto"></div>
            <div class="text-center">
              <p class="font-semibold">Base 300</p>
              <p class="text-sm text-base-content/60">#E5E5E5</p>
              <p class="text-xs text-base-content/50">Gray - separators, inactive elements</p>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Usage Examples -->
    <ComponentPreview
      title="Color Usage Examples"
      description="Examples of how colors are applied in UI components."
    >
      <template #preview>
        <div class="space-y-4">
          <div class="flex gap-2 flex-wrap">
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-secondary">Secondary Button</button>
            <button class="btn btn-accent">Accent Button</button>
          </div>
          <div class="flex gap-2 flex-wrap">
            <div class="alert alert-success">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Success: Transaction completed</span>
            </div>
          </div>
          <div class="flex gap-2 flex-wrap">
            <div class="alert alert-warning">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span>Warning: Please verify your information</span>
            </div>
          </div>
          <div class="flex gap-2 flex-wrap">
            <div class="alert alert-error">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              <span>Error: Invalid credentials</span>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import ComponentPreview from '../components/layout/ComponentPreview.vue'
</script>
