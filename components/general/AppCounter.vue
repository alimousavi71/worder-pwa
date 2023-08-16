<template>
  <div class="bg-green-700 rounded-full flex justify-center items-center gap-1 px-5 pb-2 pt-3.5">
    <span class="text-white font-medium text-lg" v-text="current"></span>
    <span class="text-white">/</span>
    <span class="text-white/90" v-text="count"></span>
  </div>
</template>
<script>
export default {
  name: 'AppCounter',
  props:{
    count:{
      type:Number,
      default:1
    },
    current:{
      type:Number,
      default:1
    }
  },
}
</script>
