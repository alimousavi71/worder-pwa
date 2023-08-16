<template>
  <div class="flex gap-2.5">
    <span v-for="(i) in 5" :key="i" class="fal fa-star"></span>
  </div>
</template>

<script>
export default {
  name:'AppRateInput',
  props: {
  },
  data() {
    return {
      star:{

      }
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
