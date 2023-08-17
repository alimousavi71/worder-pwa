<template>
  <div class="flex h-[4.3rem] items-center gap-4 px-5 bg-secondary shadow-2xl mb-2">
    <button type="button" @click="goBack" v-if="showBackButton" class="flex cursor-pointer justify-center items-center  h-10 w-10 rounded-full bg-base1">
      <span class="text-white fal fa-angle-right text-2xl"></span>
    </button>
    <span class="text-white text-xl font-medium mt-1" v-text="getAppbarTitle"></span>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'AppBar',
  props: {
    title: {
      type: String,
      default: 'Worder'
    }
  },
  computed: {
    ...mapGetters("main", [
      "getAppbarTitle",
    ]),
    showBackButton() {
      const onBack = ['/learning']
      return onBack.includes(this.$route.path)
    }
  },
  methods:{
    goBack() {
      this.$router.go(-1); // Navigate back
    }
  }
}
</script>
