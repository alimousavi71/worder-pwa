<template>
  <div @click="onClick" class="card">
    <img v-if="icon" class="w-[60px] mb-4" :src="icon" :alt="title">
    <span class="text-white/90 block font-medium text-md mb-1" v-text="title"></span>
    <span v-if="description" class="text-white/50 block text-sm" v-text="description"></span>
    <span v-if="counter !== ''" class="text-gray-100 font-bold text-4xl absolute top-7 left-5" v-text="counter"></span>
  </div>
</template>
<script>

export default {
  name: 'AppCardButton',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    icon: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    counter: {
      type: String,
      default: ''
    }
  },
  methods:{
    onClick() {
      this.$emit('click');
    }
  }
}
</script>
<style scoped>
.card{
  @apply bg-gray-900/90 cursor-pointer border-2 border-gray-800 py-4 px-4 rounded-3xl col-span-3 transition-all duration-300 hover:bg-gray-900 relative
}
</style>