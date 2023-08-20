<template>
  <div class="relative w-full mb-2" :class="{ 'pb-[25px]': validation }">
    <div class="flex items-center bg-gray-900 rounded-md px-4 py-4 gap-4">
      <span v-if="icon" class="text-white" :class="icon"></span>
      <input
        :value="value"
        :type="type"
        class="text-white text-lg bg-transparent appearance-none outline-none"
        :disabled="disabled"
        :placeholder="placeholder"
        autocomplete="one-time-code"
        @keypress="onlyNumber"
        @input="onInput"
        @change="onChange"
      />
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
  name:'AppTextField',
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
    numberInput: {
      type: Boolean,
      default: false,
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
    type: {
      type: String,
      default: 'text',
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
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if (
        this.numberInput &&
        (keyCode < 48 || keyCode > 57) &&
        keyCode !== 46
      ) {
        $event.preventDefault()
      }
    },
  },
}
</script>

<style scoped>
</style>
