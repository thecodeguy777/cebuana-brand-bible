# ✨ Elegant Scroll Animations

A lightweight, elegant scroll animation system for Vue 3 + Tailwind CSS + DaisyUI.

## 🎯 Features

- **Pure CSS animations** - Smooth 60fps performance
- **IntersectionObserver API** - Efficient viewport detection
- **Multiple animation types** - Fade, slide, scale effects
- **Scroll-linked progress** - Tie animations to scroll position
- **Customizable timing** - Control duration, delay, and easing
- **Stagger support** - Cascading animations with delays
- **Vue 3 optimized** - Composition API & TypeScript ready

---

## 🚀 Quick Start

### 1. Basic Reveal Animation

```vue
<template>
  <ScrollReveal animation="fade-up">
    <h1>This fades in from below!</h1>
  </ScrollReveal>
</template>

<script setup>
import ScrollReveal from '@/components/ScrollReveal.vue'
</script>
```

### 2. Scroll Progress Bar

```vue
<template>
  <ScrollProgress position="top" height="4px" />
</template>

<script setup>
import ScrollProgress from '@/components/ScrollProgress.vue'
</script>
```

### 3. Staggered List Animation

```vue
<template>
  <ScrollReveal
    v-for="(item, index) in items"
    :key="index"
    animation="fade-left"
    :delay="index * 100"
  >
    <div class="card">{{ item.title }}</div>
  </ScrollReveal>
</template>
```

---

## 📖 Components

### ScrollReveal

Wraps content with elegant reveal animations.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | String | `'div'` | HTML element to render |
| `animation` | String | `'fade-up'` | Animation type |
| `duration` | Number | `800` | Duration in milliseconds |
| `delay` | Number | `0` | Delay in milliseconds |
| `threshold` | Number | `0.1` | Intersection threshold (0-1) |
| `once` | Boolean | `true` | Animate only once |
| `easing` | String | `'cubic-bezier(0.16, 1, 0.3, 1)'` | CSS easing function |

**Animation Types:**
- `fade-up` - Fade in + slide up
- `fade-down` - Fade in + slide down
- `fade-left` - Fade in + slide from right
- `fade-right` - Fade in + slide from left
- `fade` - Simple fade in
- `scale` - Fade in + scale up
- `slide-up` - Bold slide up
- `slide-down` - Bold slide down

**Example:**

```vue
<ScrollReveal
  animation="fade-up"
  :duration="1000"
  :delay="200"
  easing="ease-out"
>
  <h1>Elegant Content</h1>
</ScrollReveal>
```

---

### ScrollProgress

Displays a scroll progress indicator.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | String | `'top'` | Position: `top`, `bottom`, `left`, `right` |
| `height` | String | `'3px'` | Height (for top/bottom) |
| `width` | String | `'3px'` | Width (for left/right) |
| `color` | String | `'oklch(var(--p))'` | Progress bar color |
| `bgColor` | String | `'transparent'` | Background color |
| `show` | Boolean | `true` | Show/hide bar |
| `blur` | Boolean | `false` | Add backdrop blur |
| `zIndex` | Number | `9999` | Z-index value |

**Example:**

```vue
<ScrollProgress
  position="top"
  height="4px"
  color="#ff6b6b"
  :blur="true"
/>
```

---

## 🎨 Composables

### useScrollProgress()

Tracks overall page scroll progress.

```vue
<script setup>
import { useScrollProgress } from '@/composables/useScrollAnimation'

const { scrollProgress, scrollY } = useScrollProgress()
// scrollProgress: 0-1 (percentage)
// scrollY: Current scroll position in pixels
</script>

<template>
  <div :style="{ opacity: scrollProgress }">
    Progress: {{ Math.round(scrollProgress * 100) }}%
  </div>
</template>
```

### useElementScrollProgress(elementRef)

Tracks how far an element has scrolled through viewport.

```vue
<script setup>
import { ref } from 'vue'
import { useElementScrollProgress } from '@/composables/useScrollAnimation'

const boxRef = ref(null)
const { progress, isInView } = useElementScrollProgress(boxRef)
</script>

<template>
  <div ref="boxRef" :style="{ transform: `scale(${progress})` }">
    Progress through viewport: {{ Math.round(progress * 100) }}%
  </div>
</template>
```

### useScrollAnimation(options)

Low-level composable for custom scroll animations.

```vue
<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { observe, unobserve } = useScrollAnimation({
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  delay: 0
})

// Manually observe elements
observe(element)
</script>
```

---

## 💡 Recipes

### Parallax Effect

```vue
<script setup>
import { ref } from 'vue'
import { useScrollProgress } from '@/composables/useScrollAnimation'

const { scrollProgress } = useScrollProgress()
const parallaxOffset = computed(() => scrollProgress.value * 100)
</script>

<template>
  <div
    class="parallax-bg"
    :style="{ transform: `translateY(${parallaxOffset}px)` }"
  />
</template>
```

### Scroll-Triggered Counter

```vue
<script setup>
import { ref, watch } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const count = ref(0)
const { observe } = useScrollAnimation({
  threshold: 0.5,
  once: true
})

const animateCount = () => {
  const end = 1000
  const duration = 2000
  const start = Date.now()

  const update = () => {
    const now = Date.now()
    const progress = Math.min((now - start) / duration, 1)
    count.value = Math.floor(progress * end)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  update()
}
</script>
```

### Staggered Grid

```vue
<template>
  <div class="grid grid-cols-3 gap-4">
    <ScrollReveal
      v-for="(item, i) in 9"
      :key="i"
      animation="scale"
      :delay="i * 50"
    >
      <div class="card">Item {{ i + 1 }}</div>
    </ScrollReveal>
  </div>
</template>
```

---

## 🎭 Custom Easing Functions

Use elegant easing curves for smooth motion:

```vue
<ScrollReveal easing="cubic-bezier(0.16, 1, 0.3, 1)">
  <!-- Elegant ease-out -->
</ScrollReveal>

<ScrollReveal easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
  <!-- Bouncy spring -->
</ScrollReveal>

<ScrollReveal easing="cubic-bezier(0.87, 0, 0.13, 1)">
  <!-- Smooth ease-in-out -->
</ScrollReveal>
```

**Recommended Elegant Curves:**
- Default: `cubic-bezier(0.16, 1, 0.3, 1)` - Apple-style smooth
- Gentle: `cubic-bezier(0.25, 0.1, 0.25, 1)` - Subtle ease
- Confident: `cubic-bezier(0.4, 0, 0.2, 1)` - Material Design

Explore more at: https://cubic-bezier.com

---

## 📱 View Demo

Visit `/scroll-demo` to see all animations in action!

```bash
npm run dev
# Navigate to: http://localhost:5173/scroll-demo
```

---

## 🎨 Why This Approach?

**DaisyUI Philosophy:**
- ✅ Pure CSS (no heavy JS libraries)
- ✅ Framework agnostic (works with any setup)
- ✅ Lightweight (< 5KB total)
- ✅ 60fps performance
- ✅ Elegant & sophisticated

**Compared to alternatives:**
- GSAP: ~50KB, powerful but heavy
- Framer Motion: React-only, ~30KB
- AOS: 14KB, limited customization
- **Our solution: ~3KB, Vue 3 optimized** ⭐

---

## 🚀 Performance Tips

1. **Use `once: true`** for animations that don't need to repeat
2. **Stagger delays** carefully - too many can feel slow
3. **Prefer `transform` and `opacity`** - GPU accelerated
4. **Use `threshold: 0.1-0.2`** for earlier triggers
5. **Add `passive: true`** to scroll listeners (built-in)

---

## 🎯 Best Practices

### For Elegant Motion:
- Use duration between `600-1200ms`
- Stagger delays: `50-150ms` between items
- Prefer subtle `translateY(20-30px)` over large movements
- Use gentle easing curves

### For Accessibility:
- Respect `prefers-reduced-motion`
- Don't rely on animation for critical info
- Keep animations subtle and non-distracting

---

## 📦 File Structure

```
src/
├── components/
│   ├── ScrollReveal.vue      # Reveal animation component
│   └── ScrollProgress.vue     # Progress bar component
├── composables/
│   └── useScrollAnimation.js  # Core composables
└── views/
    └── ScrollAnimationDemo.vue # Full demo page
```

---

## 🤝 Contributing

Have ideas for new animation types or improvements? Add them to the components!

**Adding a new animation:**

1. Add animation name to validator in `ScrollReveal.vue`
2. Add CSS in the `<style>` section
3. Test in demo page

---

Made with 💜 for elegant, performant web experiences.
