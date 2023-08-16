<template>
  <div class="p-3">
    <AppModal :title="$t('comment.modalTitle')" :open="commentModalOpen" @status="closeCommentModal">
      <template v-slot:content>
        <AppCommentForm/>
      </template>
    </AppModal>
    <ProfileHeader />
    <AppButton theme="large" @click="goToLearn" :label="$t('btn.start')" :full="true" class="mb-3"/>
    <AppButton theme="large" @click="modalComment(true)" :label="$t('btn.comment')" :full="true" class="mb-3"/>
    <ProfileAnalyze/>
  </div>
</template>

<script>
import ProfileHeader from '@/components/general/ProfileHeader'
import AppButton from "~/components/form/AppButton";
import ProfileAnalyze from "~/components/general/ProfileAnalyze";
import AppModal from "~/components/general/AppModal";
import AppCommentForm from "~/components/general/AppCommentForm";
export default {
  name: 'ProfileHome',
  components: {
    AppCommentForm,
    AppModal,
    ProfileAnalyze,
    AppButton,
    ProfileHeader,
  },
  data(){
    return{
      commentModalOpen: false,
    }
  },
  mounted() {

  },
  methods:{
    async goToLearn(){
      await this.$router.push('/profile/learning')
    },
    modalComment(status){
      this.commentModalOpen = status
    },
    closeCommentModal(){
      this.commentModalOpen = false
    },
  }
}
</script>
