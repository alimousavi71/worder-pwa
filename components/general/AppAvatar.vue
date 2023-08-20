<template>
  <div>
    <AppModal :open="avtarModalOpen" @status="closeAvatarModal" :title="$t('avatar.modalTitle')">
      <template #content="{triggerEvent}">
        <AppAvatarSelect :ready="triggerEvent" @done="avatarSet"/>
      </template>
    </AppModal>
    <div @click="onClick" @mouseover="showUpload = true" @mouseleave="showUpload = false" class="rounded-full cursor-pointer relative inline-block overflow-hidden border-2 p-2 bg-secondary border-gray-300/30">
      <img ref="img" class="w-[110px] h-[110px]" :src="$auth.user.avatar" :alt="$auth.user.firstname + ' ' + $auth.user.lastname">
      <div class="absolute bottom-0 left-0 p-1 text-white bg-black w-full text-center" ref="upload">
        <span class="text-sm" v-text="$t('avatar.change')"></span>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import AppModal from "~/components/general/AppModal";
import AppAvatarSelect from "~/components/general/AppAvtarSelect";
export default {
  name: 'AppAvatar',
  components: {AppAvatarSelect, AppModal},
  props: {

  },
  data(){
    return{
      showUpload:false,
      avtarModalOpen:false,
    }
  },
  watch:{
    showUpload(){
      this.startMotion()
    }
  },
  mounted() {
    this.startMotion()
  },
  methods:{
    avatarSet() {
      this.avtarModalOpen = false;
      this.$auth.fetchUser();
    },
    onClick() {
      this.avtarModalOpen = true;
    },
    closeAvatarModal(){
      this.avtarModalOpen = false;
    },
    startMotion()
    {
      gsap.to(this.$refs.upload, {
        opacity: this.showUpload ? 1 : 0,
        y: this.showUpload ? 1 : 10,
        rotateY: this.showUpload ? 0 : 20,
        rotateX: this.showUpload ? 0 : 50,
        duration: 0.5,
        ease: this.showUpload ? "easeIn" : "power3.out",
        display: this.showUpload ? "inline" : "none",
      });

      gsap.to(this.$refs.img, {
        scale: this.showUpload ? 1.5: 1.3,
        y: this.showUpload ? 10: 0,
        duration: 0.5,
        ease: this.showUpload ? "easeIn" : "power3.out",
      });
    },
  }
}
</script>
<style scoped>

</style>