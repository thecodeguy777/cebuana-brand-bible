<template>
  <div class="advanced-scroll-demo">
    <ScrollProgress position="top" height="4px" color="oklch(var(--s))" :blur="true" />

    <!-- Hero with Parallax Background -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-300">
      <!-- Parallax Background Layers -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
        :style="{ transform: `translateY(${parallaxBg * 0.5}px)` }"
      />

      <div
        class="absolute inset-0 opacity-30"
        :style="{ transform: `translateY(${parallaxBg * 0.3}px) scale(${1 + scrollProgress * 0.1})` }"
      >
        <div class="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center px-4">
        <ScrollReveal animation="zoom-in" :duration="1200">
          <h1 class="text-7xl font-bold mb-6">
            <span class="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Advanced Effects
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" :delay="300" :duration="1000">
          <p class="text-2xl text-base-content/70 mb-8">
            Parallax, Counters, and More
          </p>
        </ScrollReveal>

        <ScrollReveal animation="bounce-in" :delay="600">
          <div class="badge badge-lg badge-primary">Scroll to explore</div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Demo 1: Parallax Scrolling -->
    <section class="py-24 px-4 bg-base-100 relative overflow-hidden">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal animation="fade-up">
          <div class="text-center mb-16">
            <div class="badge badge-primary badge-lg mb-4">Demo 1</div>
            <h2 class="text-5xl font-bold mb-4">Parallax Scrolling</h2>
            <p class="text-xl text-base-content/60">Elements move at different speeds</p>
          </div>
        </ScrollReveal>

        <!-- Parallax Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Slow Layer -->
          <div
            :style="{ transform: `translateY(${parallaxSlow}px)` }"
            class="transition-transform duration-100"
          >
            <ScrollReveal animation="fade-up" :delay="0">
              <div class="card bg-primary text-primary-content shadow-2xl">
                <div class="card-body">
                  <h3 class="card-title">Slow Layer</h3>
                  <p>Moves at 30% scroll speed</p>
                  <div class="text-4xl font-bold mt-4">0.3x</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <!-- Normal Layer -->
          <div>
            <ScrollReveal animation="fade-up" :delay="100">
              <div class="card bg-secondary text-secondary-content shadow-2xl">
                <div class="card-body">
                  <h3 class="card-title">Normal Layer</h3>
                  <p>Scrolls normally</p>
                  <div class="text-4xl font-bold mt-4">1.0x</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <!-- Fast Layer -->
          <div
            :style="{ transform: `translateY(${parallaxFast}px)` }"
            class="transition-transform duration-100"
          >
            <ScrollReveal animation="fade-up" :delay="200">
              <div class="card bg-accent text-accent-content shadow-2xl">
                <div class="card-body">
                  <h3 class="card-title">Fast Layer</h3>
                  <p>Moves at 170% scroll speed</p>
                  <div class="text-4xl font-bold mt-4">1.7x</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div
        class="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        :style="{ transform: `translate(${parallaxBg * 0.2}px, ${parallaxBg * 0.3}px)` }"
      />
      <div
        class="absolute bottom-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        :style="{ transform: `translate(${-parallaxBg * 0.15}px, ${parallaxBg * 0.25}px)` }"
      />
    </section>

    <!-- Demo 2: Scroll-Triggered Counters -->
    <section ref="counterSection" class="py-24 px-4 bg-base-200">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal animation="fade-up">
          <div class="text-center mb-16">
            <div class="badge badge-secondary badge-lg mb-4">Demo 2</div>
            <h2 class="text-5xl font-bold mb-4">Animated Counters</h2>
            <p class="text-xl text-base-content/60">Numbers count up when visible</p>
          </div>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Counter 1 -->
          <ScrollReveal animation="scale-up" :delay="0">
            <div class="stats shadow-xl bg-primary text-primary-content">
              <div class="stat">
                <div class="stat-title text-primary-content/70">Projects</div>
                <div class="stat-value text-5xl">{{ animatedCount1 }}</div>
                <div class="stat-desc text-primary-content/60">Completed</div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Counter 2 -->
          <ScrollReveal animation="scale-up" :delay="100">
            <div class="stats shadow-xl bg-secondary text-secondary-content">
              <div class="stat">
                <div class="stat-title text-secondary-content/70">Users</div>
                <div class="stat-value text-5xl">{{ animatedCount2 }}k</div>
                <div class="stat-desc text-secondary-content/60">Happy Customers</div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Counter 3 -->
          <ScrollReveal animation="scale-up" :delay="200">
            <div class="stats shadow-xl bg-accent text-accent-content">
              <div class="stat">
                <div class="stat-title text-accent-content/70">Awards</div>
                <div class="stat-value text-5xl">{{ animatedCount3 }}</div>
                <div class="stat-desc text-accent-content/60">Industry Recognition</div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Counter 4 -->
          <ScrollReveal animation="scale-up" :delay="300">
            <div class="stats shadow-xl bg-base-100">
              <div class="stat">
                <div class="stat-title">Rating</div>
                <div class="stat-value text-5xl">{{ animatedCount4.toFixed(1) }}</div>
                <div class="stat-desc">Out of 5.0</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Demo 3: Scroll-Linked Progress Reveals -->
    <section class="py-24 px-4 bg-base-100">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal animation="fade-up">
          <div class="text-center mb-16">
            <div class="badge badge-accent badge-lg mb-4">Demo 3</div>
            <h2 class="text-5xl font-bold mb-4">Progress-Based Animation</h2>
            <p class="text-xl text-base-content/60">Animation tied to scroll progress</p>
          </div>
        </ScrollReveal>

        <!-- Progress Cards -->
        <div class="space-y-12">
          <!-- Card 1 -->
          <div ref="progressCard1" class="card bg-base-200 shadow-xl overflow-hidden">
            <div class="card-body relative">
              <!-- Progress Background -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-opacity duration-100"
                :style="{ opacity: progressCard1Value * 0.3 }"
              />

              <!-- Content -->
              <div class="relative z-10">
                <h3 class="card-title text-2xl mb-4">Scroll to Fill</h3>
                <p class="mb-6">This card's background fills as you scroll through it</p>

                <!-- Progress Bar -->
                <div class="w-full bg-base-300 rounded-full h-4 overflow-hidden">
                  <div
                    class="h-full bg-primary transition-all duration-100"
                    :style="{ width: `${progressCard1Value * 100}%` }"
                  />
                </div>

                <div class="text-right mt-2 text-sm opacity-70">
                  {{ Math.round(progressCard1Value * 100) }}%
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div ref="progressCard2" class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h3 class="card-title text-2xl mb-4">Scale with Scroll</h3>
              <div class="flex items-center justify-center py-12">
                <div
                  class="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-2xl transition-transform duration-100"
                  :style="{
                    transform: `scale(${0.5 + progressCard2Value * 0.5}) rotate(${progressCard2Value * 360}deg)`
                  }"
                />
              </div>
              <p class="text-center text-sm opacity-70">
                Scale: {{ (0.5 + progressCard2Value * 0.5).toFixed(2) }}x |
                Rotation: {{ Math.round(progressCard2Value * 360) }}°
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div ref="progressCard3" class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h3 class="card-title text-2xl mb-4">Text Reveal</h3>
              <p class="text-lg leading-relaxed">
                <span
                  class="transition-opacity duration-100"
                  :style="{ opacity: progressCard3Value }"
                >
                  This text gradually appears as you scroll through this section.
                  Watch as each word becomes more visible with your scroll progress.
                  It creates an elegant reading experience that draws attention naturally.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Animation Types Showcase -->
    <section class="py-24 px-4 bg-base-200">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal animation="fade-up">
          <h2 class="text-5xl font-bold text-center mb-16">All Animation Types</h2>
        </ScrollReveal>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <ScrollReveal v-for="(anim, i) in allAnimations" :key="anim" :animation="anim" :delay="i * 30">
            <div class="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
              <div class="card-body p-4 text-center">
                <p class="text-xs font-mono">{{ anim }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Spacer -->
    <div class="h-screen bg-base-100"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollProgress from '../components/ScrollProgress.vue'
import { useScrollProgress, useElementScrollProgress } from '../composables/useScrollAnimation'

// Parallax scroll tracking
const { scrollProgress, scrollY } = useScrollProgress()

const parallaxBg = computed(() => scrollY.value * 0.5)
const parallaxSlow = computed(() => scrollY.value * 0.3)
const parallaxFast = computed(() => scrollY.value * 0.7)

// Counter animation
const counterSection = ref(null)
const animatedCount1 = ref(0)
const animatedCount2 = ref(0)
const animatedCount3 = ref(0)
const animatedCount4 = ref(0)
let counterObserver = null
let countersStarted = false

const animateCounter = (targetRef, targetValue, duration = 2000, decimals = 0) => {
  const start = Date.now()
  const startValue = targetRef.value

  const update = () => {
    const now = Date.now()
    const progress = Math.min((now - start) / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3) // Cubic ease-out

    if (decimals > 0) {
      targetRef.value = parseFloat((startValue + (targetValue - startValue) * easeOut).toFixed(decimals))
    } else {
      targetRef.value = Math.floor(startValue + (targetValue - startValue) * easeOut)
    }

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  update()
}

onMounted(() => {
  // Setup counter animation observer
  counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true
          setTimeout(() => animateCounter(animatedCount1, 250, 2000), 0)
          setTimeout(() => animateCounter(animatedCount2, 50, 2500), 200)
          setTimeout(() => animateCounter(animatedCount3, 18, 2200), 400)
          setTimeout(() => animateCounter(animatedCount4, 4.9, 2300, 1), 600)
        }
      })
    },
    { threshold: 0.3 }
  )

  if (counterSection.value) {
    counterObserver.observe(counterSection.value)
  }
})

onUnmounted(() => {
  if (counterObserver) {
    counterObserver.disconnect()
  }
})

// Progress card tracking
const progressCard1 = ref(null)
const progressCard2 = ref(null)
const progressCard3 = ref(null)

const { progress: progressCard1Value } = useElementScrollProgress(progressCard1)
const { progress: progressCard2Value } = useElementScrollProgress(progressCard2)
const { progress: progressCard3Value } = useElementScrollProgress(progressCard3)

// All animation types
const allAnimations = [
  'fade-up',
  'fade-down',
  'fade-left',
  'fade-right',
  'fade',
  'scale',
  'scale-up',
  'scale-down',
  'slide-up',
  'slide-down',
  'slide-left',
  'slide-right',
  'zoom-in',
  'zoom-out',
  'rotate-left',
  'rotate-right',
  'flip-up',
  'flip-down',
  'blur-in',
  'bounce-in'
]
</script>

<style scoped>
.advanced-scroll-demo {
  overflow-x: hidden;
}

/* Smooth transitions */
.transition-transform {
  will-change: transform;
}
</style>
