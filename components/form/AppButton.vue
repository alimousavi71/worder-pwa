<template>
  <div :class="{ 'w-full': full }">
    <button
      :class="theme + ' ' + themeVar.join(' ')"
      :disabled="disabled"
      type="button"
      class="flex items-center justify-center transition-all duration-200"
      @click="clicked"
    >
      <span
        v-if="!loading"
        class="flex items-center justify-center gap-2"
        :class="{ 'flex-row-reverse': reverseIcon }"
      >
        <span v-if="icon" class="icon" :class="icon"></span>
        <span v-if="label" class="label" v-text="label"></span>
      </span>

      <span
        v-if="loading"
        class="icon-loading fal fa-circle-notch animate-spin"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  name:'AppButton',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    theme: {
      default: 'medium',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    reverseIcon: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      themeVar: [],
    }
  },
  watch: {
    field() {
      this.updateTheme()
    },
    disabled() {
      this.updateTheme()
    },
  },
  mounted() {
    this.updateTheme()
  },
  methods: {
    updateTheme() {
      const store = []
      if (this.full) {
        store.push('full-width')
      }
      if (this.disabled) {
        store.push('disabled')
      }
      this.themeVar = store
    },
    clicked() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.full-width {
  @apply w-full;
}
.disabled {
  @apply opacity-40 cursor-default;
}

.medium {
  @apply bg-secondary/90 hover:bg-secondary h-12 px-3 min-w-[100px] rounded-md;
}
.medium .label {
  @apply text-white;
}
.medium .icon {
  @apply text-white;
}
.medium .icon-loading {
  @apply text-white;
}

.large {
  @apply bg-secondary/90 hover:bg-secondary h-16 px-6 min-w-[120px] rounded-md;
}
.large .label {
  @apply text-white text-lg font-medium;
}
.large .icon {
  @apply text-white text-lg;
}
.large .icon-loading {
  @apply text-white text-lg;
}
</style>
