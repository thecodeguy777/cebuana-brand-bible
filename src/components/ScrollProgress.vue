<template>
  <div
    v-if="show"
    :class="[
      'scroll-progress',
      positionClass,
      {
        'scroll-progress-visible': scrollProgress > 0
      }
    ]"
    :style="progressStyle"
  >
    <div class="scroll-progress-bar" :style="barStyle" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useScrollProgress } from '../composables/useScrollAnimation'

const props = defineProps({
  /**
   * Position of progress bar
   */
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  },

  /**
   * Height of bar (for top/bottom)
   */
  height: {
    type: String,
    default: '3px'
  },

  /**
   * Width of bar (for left/right)
   */
  width: {
    type: String,
    default: '3px'
  },

  /**
   * Color of progress bar
   */
  color: {
    type: String,
    default: 'oklch(var(--p))' // DaisyUI primary color
  },

  /**
   * Background color
   */
  bgColor: {
    type: String,
    default: 'transparent'
  },

  /**
   * Show/hide progress bar
   */
  show: {
    type: Boolean,
    default: true
  },

  /**
   * Add blur effect to background
   */
  blur: {
    type: Boolean,
    default: false
  },

  /**
   * Z-index
   */
  zIndex: {
    type: Number,
    default: 9999
  }
})

const { scrollProgress } = useScrollProgress()

const positionClass = computed(() => {
  return `scroll-progress-${props.position}`
})

const progressStyle = computed(() => {
  const styles = {
    zIndex: props.zIndex,
    backgroundColor: props.bgColor
  }

  if (props.blur) {
    styles.backdropFilter = 'blur(10px)'
  }

  if (props.position === 'top' || props.position === 'bottom') {
    styles.height = props.height
  } else {
    styles.width = props.width
  }

  return styles
})

const barStyle = computed(() => {
  const percentage = scrollProgress.value * 100

  if (props.position === 'top' || props.position === 'bottom') {
    return {
      width: `${percentage}%`,
      backgroundColor: props.color
    }
  } else {
    return {
      height: `${percentage}%`,
      backgroundColor: props.color
    }
  }
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-progress-bar {
  transition: all 0.1s linear;
}

/* Position variants */
.scroll-progress-top {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.scroll-progress-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.scroll-progress-left {
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
}

.scroll-progress-right {
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
}

.scroll-progress-top .scroll-progress-bar,
.scroll-progress-bottom .scroll-progress-bar {
  height: 100%;
}

.scroll-progress-left .scroll-progress-bar,
.scroll-progress-right .scroll-progress-bar {
  width: 100%;
}
</style>
