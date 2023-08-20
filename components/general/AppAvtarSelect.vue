<template>
  <div class="flex flex-wrap gap-2 justify-center" ref="items">
    <div
        @click="setAvatar(item.id)"
        class="p-2 bg-black/10 transition border border-opacity-0 duration-300 transform hover:scale-125 cursor-pointer hover:bg-black/50 hover:border-opacity-50  rounded-lg"
        v-for="(item) in avatars" :key="item.id">
      <img class="w-[65px] h-[65px]" :src="item.icon" alt="avatar">
    </div>
  </div>
</template>
<script>

import gsap from "gsap";

export default {
  name: 'AppAvatarSelect',
  props: {
    ready: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      play: true,
      animation: null,
      avatars: []
    };
  },
  watch: {
    ready() {
      this.startMotion();
    },
  },

  mounted() {
    this.avatars = this.$store.state.setting.avatars;
    setTimeout(()=>{
      this.startMotion();
    },100)
  },
  destroyed() {
    this.animation.kill();
    this.animation = null;
  },
  methods: {
    startMotion() {
      this.animation = gsap.to(this.$refs.items.children, {
        scale: this.ready ? 1 : 0.7,
        y: this.ready ? 0 : -25,
        duration: 0.1,
        rotationZ:this.ready ?0:10,
        stagger: {
          from: "start",
          grid: "auto",
          ease: "power2.inOut",
        },
      });
    },

    async setAvatar(id) {
      this.loading = true;
      try {
        this.loading = true
        const {data} = await this.$profileService.avatarUpdate({
          avatar_id: id,
        })
        this.loading = false
        this.$toast.success(data.message);
        this.$emit("done");
      } catch (error) {
        this.loading = false
        console.log(error);
      }
    }
  }
}
</script>
<style scoped>

</style>
