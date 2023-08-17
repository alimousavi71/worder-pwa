<template>
  <div
      class="flex justify-between items-center bg-gray-900 shadow-md rounded-lg p-4 mb-3" ref="container"
  >
    <div class="flex justify-center items-center gap-3">
      <img
          class="w-14 rounded-full shadow-sm"
          :src="$auth.user.avatar"
          :alt="$auth.user.firstname + ' ' + $auth.user.lastname"
      />
      <h4 class="font-black text-lg text-white" v-text="$auth.user.firstname + ' ' + $auth.user.lastname"></h4>
    </div>

    <div class="flex justify-center flex-col items-center mt-2">
      <span class="text-3xl font-black text-white leading-5" v-text="$auth.user.allWords"></span>
      <span
          class="text-white font-medium text-sm leading-none"
          v-text="$t('wordCount')"
      ></span>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  name: 'ProfileHeader',
  mounted() {
    this.setMotion();
    this.start();
  },
  methods: {
    start() {
      gsap.set(this.$refs.container, {
        opacity: 0.8,
        scale:0.9,
      });

    },
    setMotion() {
      gsap.to(this.$refs.container, {
        opacity:1,
        scale:1,
        duration:0.4,
        ease:'power1.in'
      });
    }
  }
}
</script>
