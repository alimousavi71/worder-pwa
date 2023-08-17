<template>
  <div class="relative w-full mb-2" :class="{ 'pb-6': validation }">
    <div class="flex items-center bg-secondary/50 rounded-md px-4 py-3.5 gap-4">
      <span v-if="icon" class="text-white" :class="icon"></span>
      <textarea
          rows="8"
          :value="value"
          class="text-white bg-transparent appearance-none outline-none w-full resize-none"
          :disabled="disabled"
          :placeholder="placeholder"
          autocomplete="one-time-code"
          @input="onInput"
          @change="onChange"
      ></textarea>
    </div>

    <div
        class="absolute bottom-1"
        :class="{
        'bottom-[5px]': errors.length,
        'bottom-[15px]': !errors.length,
      }"
    >
      <p class="text-xs text-red-600 font-light" v-text="errors.join(',')"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTextArea',
  props: {
    value: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      addClass: {},
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onChange(event) {
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style scoped>
</style>
