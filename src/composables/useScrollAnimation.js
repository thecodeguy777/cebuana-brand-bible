/**
 * Elegant Scroll Animation Composable
 *
 * Provides smooth, sophisticated scroll-based animations
 * with IntersectionObserver for performance
 */

import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    once = true,
    delay = 0
  } = options

  const elements = ref(new Map())
  const observer = ref(null)

  const observe = (el) => {
    if (!el || elements.value.has(el)) return

    elements.value.set(el, {
      isVisible: false,
      hasAnimated: false
    })

    if (observer.value) {
      observer.value.observe(el)
    }
  }

  const unobserve = (el) => {
    if (observer.value && el) {
      observer.value.unobserve(el)
      elements.value.delete(el)
    }
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementData = elements.value.get(entry.target)
          if (!elementData) return

          if (entry.isIntersecting) {
            // Element is visible
            setTimeout(() => {
              elementData.isVisible = true
              elementData.hasAnimated = true
              entry.target.classList.add('animate-in')
              entry.target.classList.remove('animate-out')

              // Stop observing if animation should only happen once
              if (once && elementData.hasAnimated) {
                observer.value?.unobserve(entry.target)
              }
            }, delay)
          } else if (!once && elementData.hasAnimated) {
            // Element left viewport (only if not "once")
            elementData.isVisible = false
            entry.target.classList.remove('animate-in')
            entry.target.classList.add('animate-out')
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
    elements.value.clear()
  })

  return {
    observe,
    unobserve,
    elements
  }
}

/**
 * Scroll Progress Composable
 *
 * Tracks scroll progress for smooth scroll-linked animations
 */
export function useScrollProgress() {
  const scrollProgress = ref(0)
  const scrollY = ref(0)

  const updateProgress = () => {
    const winScroll = window.scrollY
    const height = document.documentElement.scrollHeight - window.innerHeight

    scrollY.value = winScroll
    scrollProgress.value = height > 0 ? (winScroll / height) : 0
  }

  onMounted(() => {
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
  })

  return {
    scrollProgress,
    scrollY
  }
}

/**
 * Element Scroll Progress Composable
 *
 * Tracks how far an element has scrolled through the viewport
 */
export function useElementScrollProgress(elementRef) {
  const progress = ref(0)
  const isInView = ref(false)

  const updateElementProgress = () => {
    if (!elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementTop = rect.top
    const elementHeight = rect.height

    // Calculate progress: 0 (entering) → 1 (exiting)
    const totalDistance = windowHeight + elementHeight
    const traveled = windowHeight - elementTop
    const rawProgress = traveled / totalDistance

    progress.value = Math.max(0, Math.min(1, rawProgress))
    isInView.value = elementTop < windowHeight && elementTop + elementHeight > 0
  }

  onMounted(() => {
    updateElementProgress()
    window.addEventListener('scroll', updateElementProgress, { passive: true })
    window.addEventListener('resize', updateElementProgress, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateElementProgress)
    window.removeEventListener('resize', updateElementProgress)
  })

  return {
    progress,
    isInView
  }
}
