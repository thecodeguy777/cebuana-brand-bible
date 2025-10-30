<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Typography</h1>
    <p class="body-large text-base-content/70 mb-12">
      Elegant and professional typography pairing using Garamond for headings and Helvetica Neue for body text.
    </p>

    <!-- Font Family -->
    <ComponentPreview
      title="Font Family"
      description="Garamond provides elegant, classic styling for headings while Helvetica Neue offers modern readability for body text."
      :code="`<!-- Serif (Headings) -->
<h1 class=&quot;font-serif&quot;>Heading in Garamond</h1>

<!-- Sans-serif (Body) -->
<p class=&quot;font-sans&quot;>Body text in Helvetica Neue</p>`"
    >
      <template #preview>
        <div class="space-y-4">
          <div class="p-6 bg-base-100 rounded-lg">
            <p class="text-4xl font-bold font-serif mb-2">Garamond Pro</p>
            <p class="text-base-content/60">Serif typeface for headings and emphasis</p>
          </div>
          <div class="p-6 bg-base-100 rounded-lg">
            <p class="text-4xl font-bold font-sans mb-2">Helvetica Neue</p>
            <p class="text-base-content/60">Sans-serif typeface for body text and UI elements</p>
          </div>
        </div>
      </template>
      <template #specs>
        <ul class="text-sm space-y-1">
          <li><strong>Serif Family:</strong> Garamond, Georgia, serif</li>
          <li><strong>Sans-serif Family:</strong> Helvetica Neue, Helvetica, Arial, sans-serif</li>
          <li><strong>Usage:</strong> Serif for headings (h1-h6), Sans-serif for body text, buttons, and UI</li>
          <li><strong>Weights:</strong> 400 (Regular), 600 (Semibold), 700 (Bold)</li>
        </ul>
      </template>
    </ComponentPreview>

    <!-- Heading Styles -->
    <ComponentPreview
      title="Headings"
      description="Hierarchical heading styles from H1 to H6 using Garamond serif font with consistent sizing and weight."
      :code="`<h1 class=&quot;heading-1 font-serif&quot;>Heading 1 - 65px</h1>
<h2 class=&quot;heading-2 font-serif&quot;>Heading 2 - 50px</h2>
<h3 class=&quot;heading-3 font-serif&quot;>Heading 3 - 45px</h3>
<h4 class=&quot;heading-4 font-serif&quot;>Heading 4 - 32px</h4>
<h5 class=&quot;heading-5 font-serif&quot;>Heading 5 - 24px</h5>
<h6 class=&quot;heading-6 font-serif&quot;>Heading 6 - 20px</h6>`"
    >
      <template #preview>
        <div class="space-y-6">
          <div class="border-l-4 border-primary pl-4">
            <h1 class="heading-1 font-serif">Heading 1</h1>
            <p class="text-sm text-base-content/50 mt-2">65px / Garamond / Bold / Line height 1.1</p>
          </div>
          <div class="border-l-4 border-primary pl-4">
            <h2 class="heading-2 font-serif">Heading 2</h2>
            <p class="text-sm text-base-content/50 mt-2">50px / Garamond / Bold / Line height 1.2</p>
          </div>
          <div class="border-l-4 border-primary pl-4">
            <h3 class="heading-3 font-serif">Heading 3</h3>
            <p class="text-sm text-base-content/50 mt-2">45px / Garamond / Semibold / Line height 1.2</p>
          </div>
          <div class="border-l-4 border-secondary pl-4">
            <h4 class="heading-4 font-serif">Heading 4</h4>
            <p class="text-sm text-base-content/50 mt-2">32px / Garamond / Semibold / Line height 1.3</p>
          </div>
          <div class="border-l-4 border-secondary pl-4">
            <h5 class="heading-5 font-serif">Heading 5</h5>
            <p class="text-sm text-base-content/50 mt-2">24px / Garamond / Semibold / Line height 1.4</p>
          </div>
          <div class="border-l-4 border-secondary pl-4">
            <h6 class="heading-6 font-serif">Heading 6</h6>
            <p class="text-sm text-base-content/50 mt-2">20px / Garamond / Semibold / Line height 1.4</p>
          </div>
        </div>
      </template>
      <template #specs>
        <div class="overflow-x-auto">
          <table class="table table-sm">
            <thead>
              <tr>
                <th>Level</th>
                <th>Size</th>
                <th>Weight</th>
                <th>Line Height</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H1</td>
                <td>65px</td>
                <td>700 (Bold)</td>
                <td>1.1</td>
                <td>Page titles, hero sections</td>
              </tr>
              <tr>
                <td>H2</td>
                <td>50px</td>
                <td>700 (Bold)</td>
                <td>1.2</td>
                <td>Section titles</td>
              </tr>
              <tr>
                <td>H3</td>
                <td>45px</td>
                <td>600 (Semibold)</td>
                <td>1.2</td>
                <td>Subsection titles</td>
              </tr>
              <tr>
                <td>H4</td>
                <td>32px</td>
                <td>600 (Semibold)</td>
                <td>1.3</td>
                <td>Card titles, modal headers</td>
              </tr>
              <tr>
                <td>H5</td>
                <td>24px</td>
                <td>600 (Semibold)</td>
                <td>1.4</td>
                <td>Component headers</td>
              </tr>
              <tr>
                <td>H6</td>
                <td>20px</td>
                <td>600 (Semibold)</td>
                <td>1.4</td>
                <td>Small headers, labels</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ComponentPreview>

    <!-- Body Text -->
    <ComponentPreview
      title="Body Text"
      description="Body text styles using Helvetica Neue for content, labels, and captions."
      :code="`<p class=&quot;body-large&quot;>Large body text - 16px</p>
<p class=&quot;body-regular&quot;>Regular body text - 14px</p>
<p class=&quot;body-small&quot;>Small body text - 12px</p>
<p class=&quot;caption&quot;>Caption text - 10px</p>`"
    >
      <template #preview>
        <div class="space-y-4">
          <div class="p-4 bg-base-100 rounded">
            <p class="body-large mb-1">Large Body Text</p>
            <p class="text-sm text-base-content/50">16px / Helvetica Neue / Regular / Line height 1.6</p>
          </div>
          <div class="p-4 bg-base-100 rounded">
            <p class="body-regular mb-1">Regular Body Text</p>
            <p class="text-sm text-base-content/50">14px / Helvetica Neue / Regular / Line height 1.6</p>
          </div>
          <div class="p-4 bg-base-100 rounded">
            <p class="body-small mb-1">Small Body Text</p>
            <p class="text-sm text-base-content/50">12px / Helvetica Neue / Regular / Line height 1.5</p>
          </div>
          <div class="p-4 bg-base-100 rounded">
            <p class="caption mb-1">Caption Text</p>
            <p class="text-sm text-base-content/50">10px / Helvetica Neue / Regular / Line height 1.4</p>
          </div>
        </div>
      </template>
      <template #specs>
        <div class="overflow-x-auto">
          <table class="table table-sm">
            <thead>
              <tr>
                <th>Type</th>
                <th>Size</th>
                <th>Weight</th>
                <th>Line Height</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Large Body</td>
                <td>16px</td>
                <td>400 (Regular)</td>
                <td>1.6</td>
                <td>Important content, descriptions</td>
              </tr>
              <tr>
                <td>Regular Body</td>
                <td>14px</td>
                <td>400 (Regular)</td>
                <td>1.6</td>
                <td>Default paragraph text</td>
              </tr>
              <tr>
                <td>Small Body</td>
                <td>12px</td>
                <td>400 (Regular)</td>
                <td>1.5</td>
                <td>Helper text, labels</td>
              </tr>
              <tr>
                <td>Caption</td>
                <td>10px</td>
                <td>400 (Regular)</td>
                <td>1.4</td>
                <td>Timestamps, metadata</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ComponentPreview>

    <!-- Typography in Context -->
    <ComponentPreview
      title="Typography in Context"
      description="Example of typography hierarchy in a typical card component."
    >
      <template #preview>
        <div class="card bg-base-100 shadow-xl max-w-md mx-auto">
          <div class="card-body">
            <h4 class="heading-4 mb-2">Account Summary</h4>
            <p class="body-regular text-base-content/70 mb-4">
              View your account balance and recent transactions
            </p>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="body-small text-base-content/60">Available Balance</span>
                <span class="heading-5 text-primary">₱ 125,500.00</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="body-small text-base-content/60">Last Updated</span>
                <span class="caption text-base-content/50">Oct 19, 2025 12:45 PM</span>
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
</script>
