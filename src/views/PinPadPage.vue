<template>
  <div class="max-w-6xl">
    <h1 class="heading-2 mb-4">PIN Pad Component</h1>
    <p class="body-large text-base-content/70 mb-12">
      Secure PIN entry interface for Cebuana Lhuillier internet banking. Features masked input, randomized number layout option, and accessibility considerations for financial transactions.
    </p>

    <!-- Interactive Demo -->
    <ComponentPreview
      title="Interactive PIN Pad Demo"
      description="Click the numbers to enter a PIN. Features masked input display and backspace functionality."
    >
      <template #preview>
        <div class="flex justify-center">
          <div class="w-full max-w-sm">
            <!-- PIN Display -->
            <div class="mb-6">
              <label class="block text-sm font-medium mb-2">Enter PIN</label>
              <div class="pin-display">
                <div class="pin-dots">
                  <span v-for="i in 6" :key="i" class="pin-dot" :class="{ 'filled': i <= pinValue.length }"></span>
                </div>
              </div>
            </div>

            <!-- Number Pad -->
            <div class="pin-pad">
              <button
                v-for="num in [1,2,3,4,5,6,7,8,9]"
                :key="num"
                @click="addDigit(num)"
                class="pin-button"
                :disabled="pinValue.length >= 6"
              >
                {{ num }}
              </button>
              <button
                @click="clearPin"
                class="pin-button pin-button-secondary"
              >
                Clear
              </button>
              <button
                @click="addDigit(0)"
                class="pin-button"
                :disabled="pinValue.length >= 6"
              >
                0
              </button>
              <button
                @click="backspace"
                class="pin-button pin-button-secondary"
                :disabled="pinValue.length === 0"
              >
                ←
              </button>
            </div>

            <!-- Submit Button -->
            <button
              @click="submitPin"
              class="btn btn-primary w-full mt-6"
              :disabled="pinValue.length !== 6"
            >
              Submit PIN
            </button>

            <!-- Status Message -->
            <div v-if="statusMessage" class="mt-4 text-center text-sm" :class="statusClass">
              {{ statusMessage }}
            </div>
          </div>
        </div>
      </template>

      <template #code>
        <CodeBlock language="vue" :code="pinPadCode" />
      </template>
    </ComponentPreview>

    <!-- Responsive Viewport Preview -->
    <ComponentPreview
      title="Responsive Viewport Preview"
      description="Drag the slider to see how the PIN pad adapts across different screen sizes (320px - 1200px)"
    >
      <template #preview>
        <div class="space-y-6">
          <!-- Viewport Info -->
          <div class="flex items-center justify-between p-4 bg-base-200 rounded-lg">
            <div class="flex items-center gap-3">
              <div
                class="w-3 h-3 rounded-full"
                :style="{ backgroundColor: deviceType.color }"
              ></div>
              <span class="font-semibold">{{ deviceType.name }}</span>
            </div>
            <div class="text-sm">
              <span class="font-mono font-semibold" style="color: #003366;">{{ viewportWidth }}px</span>
              <span class="text-base-content/60 ml-2">• Buttons: {{ buttonSize }}×{{ buttonSize }}px</span>
            </div>
          </div>

          <!-- Viewport Slider -->
          <div class="space-y-3">
            <div class="relative">
              <input
                v-model.number="viewportWidth"
                type="range"
                min="320"
                max="1200"
                step="1"
                class="viewport-slider"
              />
              <!-- Breakpoint markers -->
              <div class="breakpoint-markers">
                <div class="breakpoint-marker" style="left: 37.3%">
                  <div class="breakpoint-line"></div>
                  <span class="breakpoint-label">768px</span>
                </div>
                <div class="breakpoint-marker" style="left: 58.7%">
                  <div class="breakpoint-line"></div>
                  <span class="breakpoint-label">1024px</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between text-xs text-base-content/50">
              <span>Mobile (320px)</span>
              <span>Desktop (1200px)</span>
            </div>
          </div>

          <!-- Resizable PIN Pad Container -->
          <div class="flex justify-center py-8">
            <div
              class="viewport-container"
              :style="{ width: viewportWidth + 'px' }"
            >
              <!-- PIN Display -->
              <div class="mb-6">
                <label class="block text-sm font-medium mb-2">Enter PIN</label>
                <div class="pin-display">
                  <div class="pin-dots">
                    <span v-for="i in 6" :key="i" class="pin-dot" :class="{ 'filled': i <= responsivePinValue.length }"></span>
                  </div>
                </div>
              </div>

              <!-- Number Pad -->
              <div class="pin-pad-responsive" :style="{
                gridTemplateColumns: `repeat(3, ${buttonSize}px)`,
                gap: viewportWidth >= 1024 ? '20px' : '16px',
                maxWidth: viewportWidth >= 1024 ? '340px' : '320px',
                justifyContent: 'center'
              }">
                <button
                  v-for="num in [1,2,3,4,5,6,7,8,9]"
                  :key="num"
                  @click="addResponsiveDigit(num)"
                  class="pin-button-responsive"
                  :style="{
                    height: buttonSize + 'px',
                    fontSize: viewportWidth >= 1024 ? '24px' : '22px'
                  }"
                  :disabled="responsivePinValue.length >= 6"
                >
                  {{ num }}
                </button>
                <button
                  @click="clearResponsivePin"
                  class="pin-button-responsive pin-button-secondary"
                  :style="{ height: buttonSize + 'px' }"
                >
                  Clear
                </button>
                <button
                  @click="addResponsiveDigit(0)"
                  class="pin-button-responsive"
                  :style="{
                    height: buttonSize + 'px',
                    fontSize: viewportWidth >= 1024 ? '24px' : '22px'
                  }"
                  :disabled="responsivePinValue.length >= 6"
                >
                  0
                </button>
                <button
                  @click="backspaceResponsive"
                  class="pin-button-responsive pin-button-secondary"
                  :style="{ height: buttonSize + 'px' }"
                  :disabled="responsivePinValue.length === 0"
                >
                  ←
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Design Specifications -->
    <ComponentPreview
      title="Design Specifications"
      description="Standard dimensions, spacing, and styling for the PIN pad component."
    >
      <template #preview>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Dimensions -->
          <div class="spec-card">
            <h4 class="font-semibold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
              Dimensions
            </h4>
            <ul class="space-y-2 text-sm">
              <li><strong>Button Size:</strong> 72px × 72px (mobile), 80px × 80px (desktop)</li>
              <li><strong>Button Gap:</strong> 16px between buttons</li>
              <li><strong>PIN Dot Size:</strong> 16px diameter</li>
              <li><strong>Display Height:</strong> 64px</li>
              <li><strong>Max Width:</strong> 320px (optimal for mobile)</li>
            </ul>
          </div>

          <!-- Colors -->
          <div class="spec-card">
            <h4 class="font-semibold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
              Colors
            </h4>
            <ul class="space-y-2 text-sm">
              <li><strong>Button Background:</strong> #FFFFFF (white)</li>
              <li><strong>Button Border:</strong> #E5E5E5 (light gray)</li>
              <li><strong>Button Text:</strong> #003366 (Cebuana Blue)</li>
              <li><strong>Button Hover:</strong> #F2F2F2 background</li>
              <li><strong>PIN Dot (filled):</strong> #003366 (Cebuana Blue)</li>
              <li><strong>PIN Dot (empty):</strong> #E5E5E5 border</li>
            </ul>
          </div>

          <!-- Typography -->
          <div class="spec-card">
            <h4 class="font-semibold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              Typography
            </h4>
            <ul class="space-y-2 text-sm">
              <li><strong>Button Font:</strong> 24px / 1.5rem</li>
              <li><strong>Font Weight:</strong> 600 (semibold)</li>
              <li><strong>Label Font:</strong> 14px / 0.875rem</li>
              <li><strong>Font Family:</strong> System default (Inter, SF Pro)</li>
            </ul>
          </div>

          <!-- States -->
          <div class="spec-card">
            <h4 class="font-semibold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Interactive States
            </h4>
            <ul class="space-y-2 text-sm">
              <li><strong>Default:</strong> White background, gray border</li>
              <li><strong>Hover:</strong> Light gray background (#F2F2F2)</li>
              <li><strong>Active:</strong> Slight scale (0.95) + darker background</li>
              <li><strong>Disabled:</strong> 40% opacity, no pointer events</li>
              <li><strong>Focus:</strong> 2px Cebuana Blue outline</li>
            </ul>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Security Best Practices -->
    <ComponentPreview
      title="Security Best Practices"
      description="Important security considerations for PIN entry interfaces in banking applications."
    >
      <template #preview>
        <div class="space-y-4">
          <div class="security-item security-item-success">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">✓ Always mask PIN input</p>
                <p class="text-sm text-base-content/70">Display dots or asterisks instead of actual numbers to prevent shoulder surfing</p>
              </div>
            </div>
          </div>

          <div class="security-item security-item-success">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">✓ Clear PIN on timeout</p>
                <p class="text-sm text-base-content/70">Auto-clear entered PIN after 60 seconds of inactivity</p>
              </div>
            </div>
          </div>

          <div class="security-item security-item-success">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">✓ Limit retry attempts</p>
                <p class="text-sm text-base-content/70">Lock account after 3-5 failed PIN attempts to prevent brute force attacks</p>
              </div>
            </div>
          </div>

          <div class="security-item security-item-success">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">✓ Use HTTPS only</p>
                <p class="text-sm text-base-content/70">Always transmit PIN data over encrypted HTTPS connections</p>
              </div>
            </div>
          </div>

          <div class="security-item security-item-success">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold text-success mb-1">✓ Never log or store PIN values</p>
                <p class="text-sm text-base-content/70">PIN should only exist in memory temporarily and never be logged or stored in plaintext</p>
              </div>
            </div>
          </div>

          <div class="security-item security-item-warning">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-warning flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <div>
                <p class="font-semibold text-warning mb-1">⚠ Consider randomized number layout</p>
                <p class="text-sm text-base-content/70">For high-security scenarios, randomize number positions to prevent pattern analysis</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Accessibility Guidelines -->
    <ComponentPreview
      title="Accessibility Guidelines"
      description="Ensure PIN pad is accessible to all users, including those using assistive technologies."
    >
      <template #preview>
        <div class="space-y-4">
          <div class="accessibility-item">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 flex-shrink-0 mt-1" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
              </svg>
              <div>
                <p class="font-semibold mb-1">Keyboard Navigation</p>
                <p class="text-sm text-base-content/70">Support Tab, Shift+Tab, Arrow keys, and numeric keypad input for keyboard-only users</p>
              </div>
            </div>
          </div>

          <div class="accessibility-item">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 flex-shrink-0 mt-1" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
              </svg>
              <div>
                <p class="font-semibold mb-1">ARIA Labels</p>
                <p class="text-sm text-base-content/70">Add aria-label="PIN entry keypad" and aria-describedby for screen reader context</p>
              </div>
            </div>
          </div>

          <div class="accessibility-item">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 flex-shrink-0 mt-1" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <div>
                <p class="font-semibold mb-1">Focus Indicators</p>
                <p class="text-sm text-base-content/70">Clear visible focus outline (2px solid #003366) with 4.5:1 contrast ratio minimum</p>
              </div>
            </div>
          </div>

          <div class="accessibility-item">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 flex-shrink-0 mt-1" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="font-semibold mb-1">Touch Target Size</p>
                <p class="text-sm text-base-content/70">Minimum 44×44px touch targets for mobile to meet WCAG 2.1 Level AAA (72×72px recommended)</p>
              </div>
            </div>
          </div>

          <div class="accessibility-item">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 flex-shrink-0 mt-1" style="color: #003366;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
              </svg>
              <div>
                <p class="font-semibold mb-1">Screen Reader Announcements</p>
                <p class="text-sm text-base-content/70">Announce number of digits entered, errors, and security warnings via aria-live regions</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ComponentPreview>

    <!-- Responsive Behavior -->
    <ComponentPreview
      title="Responsive Behavior"
      description="PIN pad adapts to different screen sizes while maintaining usability and security."
      :code="`/* Mobile (default) */
.pin-pad {
  display: grid;
  grid-template-columns: repeat(3, 72px);
  gap: 16px;
  max-width: 320px;
}

.pin-button {
  width: 72px;
  height: 72px;
  font-size: 24px;
}

/* Desktop (lg breakpoint - 1024px+) */
@media (min-width: 1024px) {
  .pin-pad {
    grid-template-columns: repeat(3, 80px);
    gap: 20px;
  }

  .pin-button {
    width: 80px;
    height: 80px;
  }
}`"
      language="css"
    >
      <template #preview>
        <div class="space-y-6">
          <div class="responsive-demo">
            <h4 class="font-semibold mb-3">Mobile (320px - 768px)</h4>
            <div class="flex justify-center">
              <div style="width: 320px; padding: 20px; background: #F2F2F2; border-radius: 12px;">
                <div class="text-xs text-center mb-3 text-base-content/60">72×72px buttons, 16px gap</div>
                <div class="grid grid-cols-3 gap-4">
                  <div v-for="i in 9" :key="i" class="demo-button-mobile">{{ i }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="responsive-demo">
            <h4 class="font-semibold mb-3">Desktop (1024px+)</h4>
            <div class="flex justify-center">
              <div style="width: 360px; padding: 24px; background: #F2F2F2; border-radius: 12px;">
                <div class="text-xs text-center mb-3 text-base-content/60">80×80px buttons, 20px gap</div>
                <div class="grid grid-cols-3 gap-5">
                  <div v-for="i in 9" :key="i" class="demo-button-desktop">{{ i }}</div>
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
import { ref, computed } from 'vue'
import ComponentPreview from '../components/layout/ComponentPreview.vue'
import CodeBlock from '../components/layout/CodeBlock.vue'

const pinValue = ref('')
const statusMessage = ref('')
const statusClass = ref('')

// Responsive viewport slider state
const viewportWidth = ref(375) // Default to iPhone size
const responsivePinValue = ref('')

const deviceType = computed(() => {
  if (viewportWidth.value < 768) return { name: 'Mobile', color: '#3B82F6' }
  if (viewportWidth.value < 1024) return { name: 'Tablet', color: '#8B5CF6' }
  return { name: 'Desktop', color: '#10B981' }
})

const buttonSize = computed(() => {
  return viewportWidth.value >= 1024 ? 80 : 72
})

const addDigit = (digit) => {
  if (pinValue.value.length < 6) {
    pinValue.value += digit.toString()
    statusMessage.value = ''
  }
}

const backspace = () => {
  pinValue.value = pinValue.value.slice(0, -1)
  statusMessage.value = ''
}

const clearPin = () => {
  pinValue.value = ''
  statusMessage.value = ''
}

const submitPin = () => {
  if (pinValue.value.length === 6) {
    statusMessage.value = 'PIN submitted successfully! (Demo only)'
    statusClass.value = 'text-success'

    // Clear after 2 seconds
    setTimeout(() => {
      pinValue.value = ''
      statusMessage.value = ''
    }, 2000)
  }
}

// Responsive PIN pad functions
const addResponsiveDigit = (digit) => {
  if (responsivePinValue.value.length < 6) {
    responsivePinValue.value += digit.toString()
  }
}

const backspaceResponsive = () => {
  responsivePinValue.value = responsivePinValue.value.slice(0, -1)
}

const clearResponsivePin = () => {
  responsivePinValue.value = ''
}

const pinPadCode = `<script setup>
import { ref } from 'vue'

const pinValue = ref('')

const addDigit = (digit) => {
  if (pinValue.value.length < 6) {
    pinValue.value += digit
  }
}

const backspace = () => {
  pinValue.value = pinValue.value.slice(0, -1)
}

const clearPin = () => {
  pinValue.value = ''
}

const submitPin = () => {
  console.log('PIN submitted:', pinValue.value)
  // Handle PIN validation
}
<\/script>

<template>
  <!-- PIN Display -->
  <div class="pin-display">
    <span v-for="i in 6" :key="i"
          class="pin-dot"
          :class="{ 'filled': i <= pinValue.length }">
    </span>
  </div>

  <!-- Number Pad -->
  <div class="pin-pad">
    <button v-for="num in [1,2,3,4,5,6,7,8,9]"
            @click="addDigit(num)">
      {{ num }}
    </button>
    <button @click="clearPin">Clear</button>
    <button @click="addDigit(0)">0</button>
    <button @click="backspace">←</button>
  </div>
</template>`
</script>

<style scoped>
/* PIN Display */
.pin-display {
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
}

.pin-dots {
  display: flex;
  gap: 12px;
}

.pin-dot {
  width: 16px;
  height: 16px;
  border: 2px solid #E5E5E5;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.pin-dot.filled {
  background: #003366;
  border-color: #003366;
}

/* PIN Pad Grid */
.pin-pad {
  display: grid;
  grid-template-columns: repeat(3, 72px);
  gap: 16px;
  max-width: 320px;
  margin: 0 auto;
  justify-content: center;
}

/* PIN Buttons */
.pin-button {
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 12px;
  color: #003366;
  font-size: 24px;
  font-weight: 600;
  height: 72px;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pin-button:hover:not(:disabled) {
  background: #F2F2F2;
  border-color: #003366;
  transform: translateY(-2px);
}

.pin-button:active:not(:disabled) {
  transform: scale(0.95);
  background: #E5E5E5;
}

.pin-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pin-button:focus-visible {
  outline: 2px solid #003366;
  outline-offset: 2px;
}

.pin-button-secondary {
  background: #F2F2F2;
  color: #3D4451;
  font-size: 18px;
}

/* Specification Cards */
.spec-card {
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
}

/* Security Items */
.security-item {
  padding: 16px;
  border-radius: 12px;
  border: 2px solid transparent;
}

.security-item-success {
  background: rgba(54, 211, 153, 0.05);
  border-color: rgba(54, 211, 153, 0.2);
}

.security-item-warning {
  background: rgba(251, 189, 35, 0.05);
  border-color: rgba(251, 189, 35, 0.2);
}

/* Accessibility Items */
.accessibility-item {
  padding: 16px;
  background: rgba(0, 51, 102, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(0, 51, 102, 0.1);
}

/* Demo Buttons */
.demo-button-mobile,
.demo-button-desktop {
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #003366;
}

.demo-button-mobile {
  height: 72px;
  font-size: 20px;
}

.demo-button-desktop {
  height: 80px;
  font-size: 24px;
}

.responsive-demo {
  padding: 24px;
  background: #FAFAFA;
  border-radius: 12px;
}

/* Desktop adjustments */
@media (min-width: 1024px) {
  .pin-pad {
    grid-template-columns: repeat(3, 80px);
    gap: 20px;
    max-width: 340px;
  }

  .pin-button {
    height: 80px;
  }
}

/* Responsive Viewport Slider */
.viewport-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right,
    #3B82F6 0%,
    #3B82F6 37.3%,
    #8B5CF6 37.3%,
    #8B5CF6 58.7%,
    #10B981 58.7%,
    #10B981 100%
  );
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.viewport-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #003366;
  cursor: pointer;
  border: 3px solid #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 51, 102, 0.3);
  transition: all 0.2s ease;
}

.viewport-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0, 51, 102, 0.4);
}

.viewport-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #003366;
  cursor: pointer;
  border: 3px solid #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 51, 102, 0.3);
  transition: all 0.2s ease;
}

.viewport-slider::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0, 51, 102, 0.4);
}

/* Breakpoint Markers */
.breakpoint-markers {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  pointer-events: none;
}

.breakpoint-marker {
  position: absolute;
  top: -8px;
  transform: translateX(-50%);
}

.breakpoint-line {
  width: 2px;
  height: 24px;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

.breakpoint-label {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  font-weight: 500;
}

/* Viewport Container */
.viewport-container {
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: width 0.15s ease;
  min-width: 320px;
  max-width: 100%;
}

/* Responsive PIN Pad */
.pin-pad-responsive {
  display: grid;
  margin: 0 auto;
  transition: all 0.15s ease;
}

.pin-button-responsive {
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 12px;
  color: #003366;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pin-button-responsive:hover:not(:disabled) {
  background: #F2F2F2;
  border-color: #003366;
  transform: translateY(-2px);
}

.pin-button-responsive:active:not(:disabled) {
  transform: scale(0.95);
  background: #E5E5E5;
}

.pin-button-responsive:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pin-button-responsive:focus-visible {
  outline: 2px solid #003366;
  outline-offset: 2px;
}
</style>
