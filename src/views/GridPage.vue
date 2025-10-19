<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">Grid System</h1>
    <p class="body-large text-base-content/70 mb-12">
      12-column responsive grid system for consistent layouts and spacing throughout the Cebuana Lhuillier internet banking interface. Based on Tailwind CSS grid utilities with standardized breakpoints.
    </p>

    <!-- 12-Column Grid System -->
    <ComponentPreview
      title="12-Column Grid Foundation"
      description="The base 12-column grid provides flexible layout options. Each column can be combined to create various layout patterns."
      :code="`<!-- Two equal columns (6+6) -->
<div class=&quot;grid grid-cols-12 gap-4&quot;>
  <div class=&quot;col-span-6&quot;>Column 1</div>
  <div class=&quot;col-span-6&quot;>Column 2</div>
</div>

<!-- Three equal columns (4+4+4) -->
<div class=&quot;grid grid-cols-12 gap-4&quot;>
  <div class=&quot;col-span-4&quot;>Column 1</div>
  <div class=&quot;col-span-4&quot;>Column 2</div>
  <div class=&quot;col-span-4&quot;>Column 3</div>
</div>

<!-- Main content + Sidebar (8+4) -->
<div class=&quot;grid grid-cols-12 gap-4&quot;>
  <div class=&quot;col-span-8&quot;>Main Content</div>
  <div class=&quot;col-span-4&quot;>Sidebar</div>
</div>`"
      language="html"
    >
      <template #preview>
        <div class="space-y-8">
          <!-- 12 Columns -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">12 Columns (1+1+1+1+1+1+1+1+1+1+1+1)</p>
            <div class="grid grid-cols-12 gap-4">
              <div v-for="i in 12" :key="i" class="grid-cell">{{ i }}</div>
            </div>
          </div>

          <!-- 6 + 6 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Two Columns (6+6)</p>
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-6 grid-cell">6 columns</div>
              <div class="col-span-6 grid-cell">6 columns</div>
            </div>
          </div>

          <!-- 4 + 4 + 4 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Three Columns (4+4+4)</p>
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-4 grid-cell">4 columns</div>
              <div class="col-span-4 grid-cell">4 columns</div>
              <div class="col-span-4 grid-cell">4 columns</div>
            </div>
          </div>

          <!-- 3 + 3 + 3 + 3 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Four Columns (3+3+3+3)</p>
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-3 grid-cell">3 cols</div>
              <div class="col-span-3 grid-cell">3 cols</div>
              <div class="col-span-3 grid-cell">3 cols</div>
              <div class="col-span-3 grid-cell">3 cols</div>
            </div>
          </div>

          <!-- 8 + 4 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Main + Sidebar (8+4)</p>
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-8 grid-cell">Main content - 8 columns</div>
              <div class="col-span-4 grid-cell">Sidebar - 4 cols</div>
            </div>
          </div>

          <!-- 9 + 3 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Content + Small Sidebar (9+3)</p>
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-9 grid-cell">Main content - 9 columns</div>
              <div class="col-span-3 grid-cell">Small sidebar - 3</div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Spacing & Gutters -->
    <ComponentPreview
      title="Grid Spacing & Gutters"
      description="Consistent spacing creates visual rhythm. Standard gap sizes: 16px (gap-4), 24px (gap-6), 32px (gap-8)."
      :code="`<!-- Small gap (16px) -->
<div class=&quot;grid grid-cols-4 gap-4&quot;>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

<!-- Standard gap (24px) - Recommended -->
<div class=&quot;grid grid-cols-4 gap-6&quot;>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

<!-- Large gap (32px) -->
<div class=&quot;grid grid-cols-4 gap-8&quot;>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>`"
      language="html"
    >
      <template #preview>
        <div class="space-y-8">
          <!-- Gap 4 (16px) -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Small Gap - 16px (gap-4)</p>
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-cell">Column 1</div>
              <div class="grid-cell">Column 2</div>
              <div class="grid-cell">Column 3</div>
              <div class="grid-cell">Column 4</div>
            </div>
          </div>

          <!-- Gap 6 (24px) - Standard -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Standard Gap - 24px (gap-6) - Recommended</p>
            <div class="grid grid-cols-4 gap-6">
              <div class="grid-cell-primary">Column 1</div>
              <div class="grid-cell-primary">Column 2</div>
              <div class="grid-cell-primary">Column 3</div>
              <div class="grid-cell-primary">Column 4</div>
            </div>
          </div>

          <!-- Gap 8 (32px) -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Large Gap - 32px (gap-8)</p>
            <div class="grid grid-cols-4 gap-8">
              <div class="grid-cell">Column 1</div>
              <div class="grid-cell">Column 2</div>
              <div class="grid-cell">Column 3</div>
              <div class="grid-cell">Column 4</div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Responsive Grid -->
    <ComponentPreview
      title="Responsive Grid Behavior"
      description="Grids adapt to screen size. Stack on mobile, expand on tablet and desktop using Tailwind breakpoints (md:, lg:)."
      :code="`<!-- Mobile: 1 col → Tablet: 2 cols → Desktop: 4 cols -->
<div class=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
  <div>Account 1</div>
  <div>Account 2</div>
  <div>Account 3</div>
  <div>Account 4</div>
</div>

<!-- Mobile: Stack → Desktop: 8+4 layout -->
<div class=&quot;grid grid-cols-1 lg:grid-cols-12 gap-6&quot;>
  <div class=&quot;lg:col-span-8&quot;>Main Content</div>
  <div class=&quot;lg:col-span-4&quot;>Sidebar</div>
</div>

<!-- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px) -->`"
      language="html"
    >
      <template #preview>
        <div class="space-y-8">
          <!-- Responsive Example 1 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Mobile: 1 column → Tablet: 2 columns → Desktop: 4 columns</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="grid-cell-primary">Account 1</div>
              <div class="grid-cell-primary">Account 2</div>
              <div class="grid-cell-primary">Account 3</div>
              <div class="grid-cell-primary">Account 4</div>
            </div>
          </div>

          <!-- Responsive Example 2 -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Mobile: Stack → Desktop: 8+4 layout</p>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div class="lg:col-span-8 grid-cell">
                <p class="font-semibold mb-2">Main Content Area</p>
                <p class="text-sm opacity-75">Full width on mobile, 8 columns on desktop</p>
              </div>
              <div class="lg:col-span-4 grid-cell">
                <p class="font-semibold mb-2">Sidebar</p>
                <p class="text-sm opacity-75">Full width on mobile, 4 columns on desktop</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Do's Section -->
    <ComponentPreview
      title="✅ Grid System Do's"
      description="Best practices for using the grid system effectively."
    >
      <template #preview>
        <div class="space-y-8">
          <!-- Do: Consistent Spacing -->
          <div class="example-do">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">DO: Use consistent spacing (24px gap)</p>
                <p class="text-sm text-base-content/60">Maintain uniform gaps throughout your layout for visual consistency</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="example-good-cell">Card 1</div>
              <div class="example-good-cell">Card 2</div>
              <div class="example-good-cell">Card 3</div>
            </div>
          </div>

          <!-- Do: Align to Grid -->
          <div class="example-do">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">DO: Align content to the 12-column grid</p>
                <p class="text-sm text-base-content/60">Use proper column spans (col-span-*) for alignment</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-4 example-good-cell">4 columns</div>
              <div class="col-span-8 example-good-cell">8 columns - perfectly aligned</div>
            </div>
          </div>

          <!-- Do: Responsive Design -->
          <div class="example-do">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">DO: Stack columns on mobile devices</p>
                <p class="text-sm text-base-content/60">Use grid-cols-1 for mobile, expand on larger screens</p>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="example-good-cell">Stacks on mobile, side-by-side on tablet+</div>
              <div class="example-good-cell">Responsive and user-friendly</div>
            </div>
          </div>

          <!-- Do: White Space -->
          <div class="example-do">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">DO: Provide adequate breathing room</p>
                <p class="text-sm text-base-content/60">Don't fill every column - white space improves readability</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-10 example-good-cell">Content spans 10 columns, leaving 2 for white space</div>
            </div>
          </div>

          <!-- Do: Visual Hierarchy -->
          <div class="example-do">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">DO: Use column width to create hierarchy</p>
                <p class="text-sm text-base-content/60">Larger columns draw more attention - use strategically</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-9 example-good-cell" style="min-height: 100px;">
                <p class="font-semibold mb-2">Primary Content - 9 columns</p>
                <p class="text-sm opacity-75">Main focus area with more visual weight</p>
              </div>
              <div class="col-span-3 example-good-cell" style="min-height: 100px;">
                <p class="font-semibold mb-2">Secondary</p>
                <p class="text-sm opacity-75">Supporting info</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Don'ts Section -->
    <ComponentPreview
      title="❌ Grid System Don'ts"
      description="Common mistakes to avoid when working with the grid system."
    >
      <template #preview>
        <div class="space-y-8">
          <!-- Don't: Inconsistent Spacing -->
          <div class="example-dont">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-error mb-1">DON'T: Use inconsistent spacing</p>
                <p class="text-sm text-base-content/60">Mixing different gap sizes creates visual chaos</p>
              </div>
            </div>
            <div class="flex gap-3">
              <div class="example-bad-cell" style="width: 200px;">gap-3</div>
              <div class="example-bad-cell" style="width: 250px; margin-left: 12px;">random 12px</div>
              <div class="example-bad-cell" style="width: 220px; margin-left: 30px;">30px gap</div>
            </div>
          </div>

          <!-- Don't: Break Grid Alignment -->
          <div class="example-dont">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-error mb-1">DON'T: Break grid alignment with arbitrary widths</p>
                <p class="text-sm text-base-content/60">Elements should align to grid columns, not random widths</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-5 example-bad-cell">5 columns</div>
              <div class="example-bad-cell" style="width: 45%;">45% width - breaks grid!</div>
            </div>
          </div>

          <!-- Don't: Too Many Columns on Mobile -->
          <div class="example-dont">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-error mb-1">DON'T: Use too many columns on mobile</p>
                <p class="text-sm text-base-content/60">6 columns on a phone creates cramped, unreadable content</p>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-2">
              <div class="example-bad-cell text-xs">Too</div>
              <div class="example-bad-cell text-xs">Many</div>
              <div class="example-bad-cell text-xs">Cols</div>
              <div class="example-bad-cell text-xs">On</div>
              <div class="example-bad-cell text-xs">Mobile</div>
              <div class="example-bad-cell text-xs">Bad!</div>
            </div>
          </div>

          <!-- Don't: No White Space -->
          <div class="example-dont">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-error mb-1">DON'T: Cram content with no breathing room</p>
                <p class="text-sm text-base-content/60">Tight spacing and no gaps create overwhelming layouts</p>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-1">
              <div class="example-bad-cell text-xs p-2">Cramped</div>
              <div class="example-bad-cell text-xs p-2">No Space</div>
              <div class="example-bad-cell text-xs p-2">Hard Read</div>
              <div class="example-bad-cell text-xs p-2">Bad UX</div>
            </div>
          </div>

          <!-- Don't: Misalign Elements -->
          <div class="example-dont">
            <div class="flex items-start gap-3 mb-4">
              <svg class="w-6 h-6 text-error flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-error mb-1">DON'T: Misalign nested grid elements</p>
                <p class="text-sm text-base-content/60">Child grids should respect parent grid alignment</p>
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12 example-bad-cell">
                <div class="grid grid-cols-7 gap-3">
                  <div class="col-span-3 bg-error/10 p-3 rounded">7-col grid</div>
                  <div class="col-span-4 bg-error/10 p-3 rounded">doesn't align</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Practical Banking Examples -->
    <ComponentPreview
      title="Practical Banking Dashboard Layouts"
      description="Real-world grid applications for Cebuana internet banking interfaces."
    >
      <template #preview>
        <div class="space-y-8">
          <!-- Dashboard Layout -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Dashboard: Account Summary Grid</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="banking-card">
                <p class="text-xs text-base-content/60 mb-1">Total Balance</p>
                <p class="text-2xl font-bold" style="color: #003366;">₱462,770</p>
                <p class="text-xs text-success mt-2">+12.5% this month</p>
              </div>
              <div class="banking-card">
                <p class="text-xs text-base-content/60 mb-1">Savings Account</p>
                <p class="text-2xl font-bold" style="color: #003366;">₱125,450</p>
                <p class="text-xs text-base-content/50 mt-2">****1234</p>
              </div>
              <div class="banking-card">
                <p class="text-xs text-base-content/60 mb-1">Checking Account</p>
                <p class="text-2xl font-bold" style="color: #003366;">₱87,320</p>
                <p class="text-xs text-base-content/50 mt-2">****5678</p>
              </div>
              <div class="banking-card">
                <p class="text-xs text-base-content/60 mb-1">Transactions</p>
                <p class="text-2xl font-bold" style="color: #E94B35;">247</p>
                <p class="text-xs text-base-content/50 mt-2">This month</p>
              </div>
            </div>
          </div>

          <!-- Transaction List -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Main Content + Sidebar (8+4)</p>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div class="lg:col-span-8 banking-card">
                <p class="font-semibold mb-4">Recent Transactions</p>
                <div class="space-y-3">
                  <div class="flex justify-between items-center py-2 border-b border-base-300">
                    <div>
                      <p class="font-medium">Salary Deposit</p>
                      <p class="text-xs text-base-content/50">Jan 14, 2025</p>
                    </div>
                    <p class="font-bold text-success">+₱25,000</p>
                  </div>
                  <div class="flex justify-between items-center py-2 border-b border-base-300">
                    <div>
                      <p class="font-medium">Money Transfer</p>
                      <p class="text-xs text-base-content/50">Jan 15, 2025</p>
                    </div>
                    <p class="font-bold" style="color: #E94B35;">-₱5,000</p>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-4 banking-card">
                <p class="font-semibold mb-4">Quick Actions</p>
                <div class="space-y-2">
                  <button class="btn btn-sm w-full" style="background-color: #003366; border: none; color: white;">Transfer Money</button>
                  <button class="btn btn-sm btn-outline w-full" style="border-color: #003366; color: #003366;">Pay Bills</button>
                  <button class="btn btn-sm btn-outline w-full" style="border-color: #003366; color: #003366;">View Statements</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Layout -->
          <div>
            <p class="text-sm text-base-content/60 mb-3">Two-Column Form Layout</p>
            <div class="banking-card">
              <p class="font-semibold mb-4">Transfer Money</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="text-sm text-base-content/70 mb-2 block">From Account</label>
                  <select class="select select-bordered w-full">
                    <option>Savings ****1234</option>
                  </select>
                </div>
                <div>
                  <label class="text-sm text-base-content/70 mb-2 block">To Account</label>
                  <select class="select select-bordered w-full">
                    <option>Checking ****5678</option>
                  </select>
                </div>
                <div>
                  <label class="text-sm text-base-content/70 mb-2 block">Amount</label>
                  <input type="text" placeholder="₱0.00" class="input input-bordered w-full" />
                </div>
                <div>
                  <label class="text-sm text-base-content/70 mb-2 block">Reference</label>
                  <input type="text" placeholder="Optional" class="input input-bordered w-full" />
                </div>
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

<style scoped>
/* Grid Cell Styles */
.grid-cell {
  background: linear-gradient(135deg, rgba(0, 51, 102, 0.1) 0%, rgba(12, 53, 88, 0.1) 100%);
  border: 2px dashed #003366;
  padding: 1.5rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #003366;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-cell-primary {
  background: linear-gradient(135deg, #003366 0%, #0C3558 100%);
  border: none;
  padding: 1.5rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Do's Examples */
.example-do {
  padding: 1.5rem;
  background-color: rgba(54, 211, 153, 0.05);
  border: 2px solid rgba(54, 211, 153, 0.3);
  border-radius: 0.75rem;
}

.example-good-cell {
  background: linear-gradient(135deg, rgba(54, 211, 153, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%);
  border: 2px solid rgba(54, 211, 153, 0.4);
  padding: 1.5rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #22C55E;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Don'ts Examples */
.example-dont {
  padding: 1.5rem;
  background-color: rgba(248, 114, 114, 0.05);
  border: 2px solid rgba(248, 114, 114, 0.3);
  border-radius: 0.75rem;
}

.example-bad-cell {
  background: linear-gradient(135deg, rgba(248, 114, 114, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%);
  border: 2px solid rgba(248, 114, 114, 0.4);
  padding: 1.5rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #EF4444;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Banking Card Component */
.banking-card {
  background-color: white;
  border: 1px solid #E5E5E5;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 300ms;
}

.banking-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
</style>
