<template>
  <div class="scroll-demo">
    <!-- Scroll Progress Bar -->
    <ScrollProgress position="top" height="4px" :blur="true" />

    <!-- Hero Section -->
    <section class="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <ScrollReveal animation="fade-up" :duration="1000">
            <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Elegant Scroll Animations
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" :duration="1000" :delay="200">
            <p class="text-xl text-base-content/70 mb-8">
              Smooth, sophisticated scroll effects that bring your content to life
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale" :duration="800" :delay="400">
            <button class="btn btn-primary btn-lg">
              Explore Below ↓
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Animation Types -->
    <section class="py-24 px-4 bg-base-100">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal animation="fade-up">
          <h2 class="text-4xl font-bold text-center mb-16">Animation Styles</h2>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Fade Up -->
          <ScrollReveal animation="fade-up" :delay="0">
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body">
                <h3 class="card-title">Fade Up</h3>
                <p>Elegant upward reveal with fade</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-ghost">Learn More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Fade Down -->
          <ScrollReveal animation="fade-down" :delay="100">
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body">
                <h3 class="card-title">Fade Down</h3>
                <p>Graceful downward motion</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-ghost">Learn More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Scale -->
          <ScrollReveal animation="scale" :delay="200">
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body">
                <h3 class="card-title">Scale</h3>
                <p>Smooth zoom-in effect</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-ghost">Learn More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Fade Left -->
          <ScrollReveal animation="fade-left" :delay="0">
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body">
                <h3 class="card-title">Fade Left</h3>
                <p>Slide in from the right</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-ghost">Learn More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Fade Right -->
          <ScrollReveal animation="fade-right" :delay="100">
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body">
                <h3 class="card-title">Fade Right</h3>
                <p>Slide in from the left</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-ghost">Learn More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Slide Up -->
          <ScrollReveal animation="slide-up" :delay="200">
            <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div class="card-body">
                <h3 class="card-title">Slide Up</h3>
                <p>Bold upward slide</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-sm btn-ghost">Learn More</button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Staggered List -->
    <section class="py-24 px-4 bg-base-200">
      <div class="container mx-auto max-w-4xl">
        <ScrollReveal animation="fade-up">
          <h2 class="text-4xl font-bold text-center mb-16">Staggered Reveals</h2>
        </ScrollReveal>

        <div class="space-y-6">
          <ScrollReveal
            v-for="(item, index) in features"
            :key="index"
            animation="fade-left"
            :delay="index * 100"
          >
            <div class="flex items-start gap-4 p-6 bg-base-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div class="badge badge-primary badge-lg">{{ index + 1 }}</div>
              <div>
                <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                <p class="text-base-content/70">{{ item.description }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Scroll-Linked Animation -->
    <section class="py-24 px-4 bg-base-100">
      <div class="container mx-auto max-w-4xl">
        <ScrollReveal animation="fade-up">
          <h2 class="text-4xl font-bold text-center mb-16">Scroll-Linked Progress</h2>
        </ScrollReveal>

        <div ref="progressElementRef" class="relative h-96 bg-base-200 rounded-lg overflow-hidden">
          <div
            class="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-opacity duration-100"
            :style="{ opacity: elementProgress }"
          />
          <div class="relative z-10 h-full flex items-center justify-center">
            <div class="text-center">
              <p class="text-6xl font-bold text-white mb-4">
                {{ Math.round(elementProgress * 100) }}%
              </p>
              <p class="text-xl text-white/80">Scroll Progress Through This Element</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Text Reveal -->
    <section class="py-24 px-4 bg-base-200">
      <div class="container mx-auto max-w-3xl">
        <ScrollReveal animation="fade-up" :duration="1200">
          <h2 class="text-5xl font-bold leading-relaxed">
            <span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Create beautiful, elegant experiences
            </span>
            <span class="block mt-4 text-base-content/70">
              that captivate and engage your audience
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" :delay="300" :duration="1000">
          <p class="text-xl text-base-content/60 mt-8 leading-relaxed">
            Every scroll tells a story. Make yours unforgettable with smooth,
            sophisticated animations that feel natural and responsive.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-4 bg-base-100">
      <div class="container mx-auto max-w-4xl text-center">
        <ScrollReveal animation="scale" :duration="1000">
          <div class="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl">
            <div class="card-body py-16">
              <h2 class="card-title text-4xl justify-center mb-4">
                Ready to elevate your design?
              </h2>
              <p class="text-lg opacity-90 mb-8">
                Start using these elegant scroll animations in your project today
              </p>
              <div class="card-actions justify-center gap-4">
                <button class="btn btn-lg bg-white text-primary hover:bg-base-100">
                  Get Started
                </button>
                <button class="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
                  View Docs
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Spacer for scroll -->
    <div class="h-screen"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollProgress from '../components/ScrollProgress.vue'
import { useElementScrollProgress } from '../composables/useScrollAnimation'

// Features list
const features = [
  {
    title: 'Lightweight & Performant',
    description: 'Built with IntersectionObserver for smooth 60fps animations'
  },
  {
    title: 'Customizable Timing',
    description: 'Control duration, delay, and easing for perfect motion'
  },
  {
    title: 'Multiple Animation Types',
    description: 'Fade, slide, scale - mix and match for unique effects'
  },
  {
    title: 'Stagger Support',
    description: 'Create cascading animations with simple delay props'
  },
  {
    title: 'Scroll-Linked Progress',
    description: 'Tie animations directly to scroll position'
  },
  {
    title: 'Vue 3 Optimized',
    description: 'Built specifically for Vue 3 Composition API'
  }
]

// Scroll-linked element progress
const progressElementRef = ref(null)
const { progress: elementProgress } = useElementScrollProgress(progressElementRef)
</script>

<style scoped>
.scroll-demo {
  overflow-x: hidden;
}

/* Custom scrollbar for elegance */
:deep(::-webkit-scrollbar) {
  width: 8px;
}

:deep(::-webkit-scrollbar-track) {
  background: oklch(var(--b2));
}

:deep(::-webkit-scrollbar-thumb) {
  background: oklch(var(--p) / 0.5);
  border-radius: 4px;
}

:deep(::-webkit-scrollbar-thumb:hover) {
  background: oklch(var(--p));
}
</style>
