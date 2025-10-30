<template>
  <component
    :is="tag"
    ref="elementRef"
    :class="[
      'scroll-reveal',
      animationClass,
      {
        'opacity-0': !isVisible && !hasAnimated
      }
    ]"
    :style="computedStyle"
  >
    <slot />
  </component>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  /**
   * HTML tag to render
   */
  tag: {
    type: String,
    default: 'div'
  },

  /**
   * Animation type
   */
  animation: {
    type: String,
    default: 'fade-up',
    validator: (value) => [
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
    ].includes(value)
  },

  /**
   * Animation duration in milliseconds
   */
  duration: {
    type: Number,
    default: 800
  },

  /**
   * Animation delay in milliseconds
   */
  delay: {
    type: Number,
    default: 0
  },

  /**
   * Intersection threshold (0-1)
   */
  threshold: {
    type: Number,
    default: 0.1
  },

  /**
   * Trigger animation only once
   */
  once: {
    type: Boolean,
    default: true
  },

  /**
   * Custom easing function
   */
  easing: {
    type: String,
    default: 'cubic-bezier(0.16, 1, 0.3, 1)' // Elegant easing
  }
})

const elementRef = ref(null)
const isVisible = ref(false)
const hasAnimated = ref(false)
const observer = ref(null)

const animationClass = computed(() => {
  return `reveal-${props.animation}`
})

const computedStyle = computed(() => {
  return {
    '--reveal-duration': `${props.duration}ms`,
    '--reveal-delay': `${props.delay}ms`,
    '--reveal-easing': props.easing
  }
})

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true
            hasAnimated.value = true

            if (props.once) {
              observer.value?.unobserve(entry.target)
            }
          }, props.delay)
        } else if (!props.once && hasAnimated.value) {
          isVisible.value = false
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -80px 0px'
    }
  )

  if (elementRef.value) {
    observer.value.observe(elementRef.value)
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

watch(isVisible, (newVal) => {
  if (newVal && elementRef.value) {
    elementRef.value.classList.add('animate-in')
  } else if (!props.once && elementRef.value) {
    elementRef.value.classList.remove('animate-in')
  }
})
</script>

<style scoped>
.scroll-reveal {
  transition-property: opacity, transform, filter;
  transition-duration: var(--reveal-duration, 800ms);
  transition-timing-function: var(--reveal-easing, cubic-bezier(0.16, 1, 0.3, 1));
  transition-delay: var(--reveal-delay, 0ms);
}

/* Fade animations */
.reveal-fade {
  opacity: 0;
}

.reveal-fade.animate-in {
  opacity: 1;
}

/* Fade + slide animations */
.reveal-fade-up {
  opacity: 0;
  transform: translateY(30px);
}

.reveal-fade-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.reveal-fade-down {
  opacity: 0;
  transform: translateY(-30px);
}

.reveal-fade-down.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.reveal-fade-left {
  opacity: 0;
  transform: translateX(30px);
}

.reveal-fade-left.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.reveal-fade-right {
  opacity: 0;
  transform: translateX(-30px);
}

.reveal-fade-right.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* Scale animations */
.reveal-scale {
  opacity: 0;
  transform: scale(0.9);
}

.reveal-scale.animate-in {
  opacity: 1;
  transform: scale(1);
}

.reveal-scale-up {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.reveal-scale-up.animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.reveal-scale-down {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.reveal-scale-down.animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Slide animations */
.reveal-slide-up {
  opacity: 0;
  transform: translateY(50px);
}

.reveal-slide-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.reveal-slide-down {
  opacity: 0;
  transform: translateY(-50px);
}

.reveal-slide-down.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.reveal-slide-left {
  opacity: 0;
  transform: translateX(50px);
}

.reveal-slide-left.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.reveal-slide-right {
  opacity: 0;
  transform: translateX(-50px);
}

.reveal-slide-right.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* Zoom animations */
.reveal-zoom-in {
  opacity: 0;
  transform: scale(0.5);
}

.reveal-zoom-in.animate-in {
  opacity: 1;
  transform: scale(1);
}

.reveal-zoom-out {
  opacity: 0;
  transform: scale(1.3);
}

.reveal-zoom-out.animate-in {
  opacity: 1;
  transform: scale(1);
}

/* Rotate animations */
.reveal-rotate-left {
  opacity: 0;
  transform: rotate(-10deg) scale(0.9);
}

.reveal-rotate-left.animate-in {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.reveal-rotate-right {
  opacity: 0;
  transform: rotate(10deg) scale(0.9);
}

.reveal-rotate-right.animate-in {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* Flip animations */
.reveal-flip-up {
  opacity: 0;
  transform: perspective(1000px) rotateX(-45deg);
  transform-origin: center bottom;
}

.reveal-flip-up.animate-in {
  opacity: 1;
  transform: perspective(1000px) rotateX(0deg);
}

.reveal-flip-down {
  opacity: 0;
  transform: perspective(1000px) rotateX(45deg);
  transform-origin: center top;
}

.reveal-flip-down.animate-in {
  opacity: 1;
  transform: perspective(1000px) rotateX(0deg);
}

/* Blur animation */
.reveal-blur-in {
  opacity: 0;
  filter: blur(10px);
}

.reveal-blur-in.animate-in {
  opacity: 1;
  filter: blur(0);
}

/* Bounce animation */
.reveal-bounce-in {
  opacity: 0;
  transform: scale(0.3);
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.reveal-bounce-in.animate-in {
  opacity: 1;
  transform: scale(1);
}
</style>
