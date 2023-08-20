<template>
  <div
      ref="modal"
      class="fixed hidden top-0 left-0 z-20 w-full  p-5  md:p-20 bg-primary bg-black/70 max-height overflow-y-auto">
    <div class="w-full md:w-[500px] bg-base3 shadow-2xl py-7 px-5 rounded-lg mx-auto">
      <div class="flex items-center justify-between mb-3">
        <h1 class="text-xl font-bold text-white" v-text="title"></h1>
        <div
            class="flex items-center justify-center p-2 rounded-full cursor-pointer bg-opacity-5 bg-infra-red-06"
            @click="cancelAction">
          <span class="text-xl fas fa-close text-white"></span>
        </div>
      </div>
      <hr class="border border-secondary/15" />
      <div class="pt-3">
        <slot :triggerEvent="triggerEvent" name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
export default {
  name: 'AppModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Modal Title",
    },
  },
  data() {
    return {
      openStatus: false,
      triggerEvent: false,
      timeline:null
    };
  },
  watch: {
    open() {
      this.openStatus = this.open;
      this.startMotion();
    },
  },
  mounted() {
    this.openStatus = this.open;
    this.setMotion();
  },
  methods: {
    cancelAction() {
      this.openStatus = false;
      this.$emit("status", this.openStatus);
    },
    startMotion() {
      const self = this;
      gsap.to(this.$refs.modal, {
        opacity: this.openStatus ? 1 : 0,
        y: this.openStatus ? 0 : 100,
        z: this.openStatus ? 0 : 20,
        duration: this.openStatus ? 0.6 : 0.3,
        ease: this.openStatus ? "power1.out" : "power1.in",
        display: this.openStatus ? "block" : "none",
        onStart(){
          self.triggerEvent = false;
        },
        onComplete() {
          if (self.openStatus){
            self.triggerEvent = true;
          }
        }
      });
    },
    setMotion() {
      gsap.set(this.$refs.modal, {
        opacity: 0,
        y: 100,
        z: 20,
        display: "none",
      });
    },
  },
}
</script>
<style scoped>
.max-height{
  max-height: 100vh;
}
</style>
