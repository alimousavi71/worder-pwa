<template>
  <div class="flex h-[4.3rem] items-center justify-between  px-5 bg-secondary shadow-2xl mb-2">
    <div class="flex items-center gap-4">
      <button type="button" @click="goBack" v-if="showBackButton" class="flex cursor-pointer justify-center items-center hover:bg-base1 transition-all duration-200 h-8 w-8 rounded-full bg-base1/25">
        <span class="text-white fal fa-angle-right text-xl"></span>
      </button>
      <span class="text-white text-lg font-medium mt-1" v-text="getAppbarTitle"></span>
    </div>
    <div>
      <button type="button"  class="flex cursor-pointer justify-center items-center hover:bg-base1 transition-all duration-200 h-8 w-8 rounded-full bg-base1/25">
        <span class="text-white fas fa-phone text-xl"></span>
      </button>
    </div>
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
      const onBack = ['/learning','/profile/edit']
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
