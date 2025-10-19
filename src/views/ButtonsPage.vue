<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Buttons</h1>
    <p class="body-large text-base-content/70 mb-12">
      Standard button styles, states, and interactive controls for Corporate Internet Banking.
    </p>

    <!-- Primary Buttons -->
    <ComponentPreview
      title="Primary Buttons"
      description="Main call-to-action buttons using Cebuana blue for primary actions."
    >
      <template #preview>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary">Primary Button</button>
          <button class="btn btn-primary btn-active">Active</button>
          <button class="btn btn-primary" disabled>Disabled</button>
          <button class="btn btn-primary btn-lg">Large</button>
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary btn-xs">Tiny</button>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="primaryButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Secondary Buttons -->
    <ComponentPreview
      title="Secondary Buttons"
      description="Alternative actions using secondary styling."
    >
      <template #preview>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-secondary">Secondary Button</button>
          <button class="btn btn-secondary btn-active">Active</button>
          <button class="btn btn-secondary" disabled>Disabled</button>
          <button class="btn btn-secondary btn-lg">Large</button>
          <button class="btn btn-secondary btn-sm">Small</button>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="secondaryButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Tertiary / Outline Buttons -->
    <ComponentPreview
      title="Tertiary / Outline Buttons"
      description="Less prominent actions with outline styling."
    >
      <template #preview>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-outline">Outline Default</button>
          <button class="btn btn-outline btn-primary">Outline Primary</button>
          <button class="btn btn-outline btn-secondary">Outline Secondary</button>
          <button class="btn btn-outline btn-accent">Outline Accent</button>
          <button class="btn btn-outline" disabled>Disabled</button>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="tertiaryButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Ghost & Link Buttons -->
    <ComponentPreview
      title="Ghost & Link Buttons"
      description="Minimal styling for subtle actions."
    >
      <template #preview>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="btn btn-ghost">Ghost Button</button>
          <button class="btn btn-ghost btn-primary">Ghost Primary</button>
          <button class="btn btn-link">Link Button</button>
          <button class="btn btn-link btn-primary">Link Primary</button>
          <button class="btn btn-ghost" disabled>Disabled</button>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="ghostButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Button States -->
    <ComponentPreview
      title="Button States"
      description="Different button states for user feedback."
    >
      <template #preview>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
          <button class="btn btn-info">Info</button>
          <button class="btn loading">Loading</button>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="stateButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Buttons with Icons -->
    <ComponentPreview
      title="Buttons with Icons"
      description="Buttons enhanced with icons for better visual communication."
    >
      <template #preview>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            Add New
          </button>
          <button class="btn btn-secondary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          <button class="btn btn-accent">
            Transfer
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <button class="btn btn-circle btn-primary">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="iconButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Button Groups -->
    <ComponentPreview
      title="Button Groups"
      description="Related buttons grouped together."
    >
      <template #preview>
        <div class="space-y-4">
          <div class="btn-group">
            <button class="btn">1</button>
            <button class="btn btn-active">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
          </div>
          <div class="btn-group">
            <button class="btn btn-primary">Approve</button>
            <button class="btn">Hold</button>
            <button class="btn btn-error">Reject</button>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="buttonGroupCode" />
      </template>
    </ComponentPreview>

    <!-- Radio Button Group -->
    <ComponentPreview
      title="Radio Button Group"
      description="Radio-style button selection for single choice options."
    >
      <template #preview>
        <div class="space-y-4">
          <div class="join">
            <input class="join-item btn" type="radio" name="options" aria-label="Daily" />
            <input class="join-item btn btn-primary" type="radio" name="options" aria-label="Weekly" checked />
            <input class="join-item btn" type="radio" name="options" aria-label="Monthly" />
          </div>
          <div class="join">
            <input class="join-item btn btn-primary btn-sm" type="radio" name="view" aria-label="List" checked />
            <input class="join-item btn btn-sm" type="radio" name="view" aria-label="Grid" />
            <input class="join-item btn btn-sm" type="radio" name="view" aria-label="Table" />
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="radioButtonCode" />
      </template>
    </ComponentPreview>

    <!-- Steppers -->
    <ComponentPreview
      title="Steppers"
      description="Multi-step progress indicator with clickable steps."
    >
      <template #preview>
        <ul class="steps steps-horizontal w-full">
          <li class="step step-primary">Account Details</li>
          <li class="step step-primary">Verification</li>
          <li class="step">Security Setup</li>
          <li class="step">Complete</li>
        </ul>
      </template>

      <template #code>
        <CodeBlock language="html" :code="stepperCode" />
      </template>
    </ComponentPreview>

    <!-- Action Button Examples -->
    <ComponentPreview
      title="Common Action Patterns"
      description="Real-world button usage patterns for banking actions."
    >
      <template #preview>
        <div class="space-y-6">
          <!-- Form Actions -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Transfer Confirmation</h3>
              <p>Transfer ₱10,000.00 to Account ****5678?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-ghost">Cancel</button>
                <button class="btn btn-primary">Confirm Transfer</button>
              </div>
            </div>
          </div>

          <!-- Toolbar Actions -->
          <div class="flex justify-between items-center p-4 bg-base-200 rounded-lg">
            <div class="flex gap-2">
              <button class="btn btn-sm btn-ghost">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                </svg>
                Filter
              </button>
              <button class="btn btn-sm btn-ghost">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Export
              </button>
            </div>
            <button class="btn btn-sm btn-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              New Transaction
            </button>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="html" :code="actionPatternsCode" />
      </template>
    </ComponentPreview>

  </div>
</template>

<script setup>
import ComponentPreview from '../components/layout/ComponentPreview.vue'
import CodeBlock from '../components/layout/CodeBlock.vue'

const primaryButtonCode = `<!-- Primary Buttons -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-primary btn-active">Active</button>
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Sizes -->
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-xs">Tiny</button>`

const secondaryButtonCode = `<!-- Secondary Buttons -->
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-secondary btn-active">Active</button>
<button class="btn btn-secondary" disabled>Disabled</button>

<!-- Sizes -->
<button class="btn btn-secondary btn-lg">Large</button>
<button class="btn btn-secondary btn-sm">Small</button>`

const tertiaryButtonCode = `<!-- Outline Buttons -->
<button class="btn btn-outline">Outline Default</button>
<button class="btn btn-outline btn-primary">Outline Primary</button>
<button class="btn btn-outline btn-secondary">Outline Secondary</button>
<button class="btn btn-outline btn-accent">Outline Accent</button>
<button class="btn btn-outline" disabled>Disabled</button>`

const ghostButtonCode = `<!-- Ghost Buttons -->
<button class="btn btn-ghost">Ghost Button</button>
<button class="btn btn-ghost btn-primary">Ghost Primary</button>

<!-- Link Buttons -->
<button class="btn btn-link">Link Button</button>
<button class="btn btn-link btn-primary">Link Primary</button>

<button class="btn btn-ghost" disabled>Disabled</button>`

const stateButtonCode = `<!-- State Buttons -->
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<button class="btn btn-info">Info</button>
<button class="btn loading">Loading</button>`

const iconButtonCode = `<!-- Buttons with Icons -->
<button class="btn btn-primary">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
  Add New
</button>

<button class="btn btn-secondary">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
  </svg>
  Back
</button>

<!-- Circle Icon Button -->
<button class="btn btn-circle btn-primary">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
</button>`

const buttonGroupCode = `<!-- Button Group -->
<div class="btn-group">
  <button class="btn">1</button>
  <button class="btn btn-active">2</button>
  <button class="btn">3</button>
  <button class="btn">4</button>
</div>

<!-- Action Group -->
<div class="btn-group">
  <button class="btn btn-primary">Approve</button>
  <button class="btn">Hold</button>
  <button class="btn btn-error">Reject</button>
</div>`

const radioButtonCode = `<!-- Radio Button Group -->
<div class="join">
  <input class="join-item btn" type="radio" name="options" aria-label="Daily" />
  <input class="join-item btn" type="radio" name="options" aria-label="Weekly" checked />
  <input class="join-item btn" type="radio" name="options" aria-label="Monthly" />
</div>

<!-- Small Radio Buttons -->
<div class="join">
  <input class="join-item btn btn-sm" type="radio" name="view" aria-label="List" checked />
  <input class="join-item btn btn-sm" type="radio" name="view" aria-label="Grid" />
  <input class="join-item btn btn-sm" type="radio" name="view" aria-label="Table" />
</div>`

const stepperCode = `<!-- Stepper -->
<ul class="steps steps-horizontal w-full">
  <li class="step step-primary">Account Details</li>
  <li class="step step-primary">Verification</li>
  <li class="step">Security Setup</li>
  <li class="step">Complete</li>
</ul>`

const actionPatternsCode = `<!-- Form Actions Pattern -->
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h3 class="card-title">Transfer Confirmation</h3>
    <p>Transfer ₱10,000.00 to Account ****5678?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Confirm Transfer</button>
    </div>
  </div>
</div>

<!-- Toolbar Actions Pattern -->
<div class="flex justify-between items-center p-4 bg-base-200 rounded-lg">
  <div class="flex gap-2">
    <button class="btn btn-sm btn-ghost">Filter</button>
    <button class="btn btn-sm btn-ghost">Export</button>
  </div>
  <button class="btn btn-sm btn-primary">New Transaction</button>
</div>`
</script>
