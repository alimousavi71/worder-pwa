<template>
  <div class="flex flex-col items-center">
    <img class="w-24" src="~/assets/images/logo.png" :alt="$t('appName')" />
    <h4 class="text-white font-bold" v-text="title"></h4>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
