<template>
  <div class="p-3" ref="container">
    <AppModal :title="$t('comment.modalTitle')" :open="commentModalOpen" @status="closeCommentModal">
      <template v-slot:content>
        <AppCommentForm @done="commentSent"/>
      </template>
    </AppModal>

    <ProfileHeader/>

    <div class="grid grid-cols-6 flex-wrap justify-center my-8 gap-3">
      <AppCardButton @click="goTo('learning')" icon="/images/word3d.png" title="شروع یاد گیری" description="بزن بریم یاد بگیریم"/>
      <AppCardButton @click="goTo('make-exam')" icon="/images/exam3d.png" title="آزمون جدید" description="بزن بریم آزمون جدید!"/>
    </div>

    <ProfileAnalyze :counters="profile.counters"/>

  </div>
</template>

<script>

import ProfileHeader from '~/components/general/ProfileHeader'
import ProfileAnalyze from "~/components/general/ProfileAnalyze";
import AppModal from "~/components/general/AppModal";
import AppCommentForm from "~/components/general/AppCommentForm";
import AppCardButton from "~/components/general/AppCardButton";

export default {
  async asyncData({$axios}) {
    const data = await $axios.$get(`/api/profile`);
    return {
      profile: data.data,
    };
  },
  name: 'IndexPage',
  components: {
    AppCardButton,
    AppCommentForm,
    AppModal,
    ProfileAnalyze,
    ProfileHeader,
  },
  data() {
    return {
      commentModalOpen: false,
    }
  },
  mounted() {
    this.$store.commit('main/setAppbarTitle', this.$t('nav.home'));
  },
  methods: {
    async goTo(to){
      await this.$router.push(to)
    },
    async goToLearn() {
      await this.$router.push('/learning')
    },
    modalComment(status) {
      this.commentModalOpen = status
    },
    closeCommentModal() {
      this.commentModalOpen = false
    },
    commentSent() {
      this.commentModalOpen = false
    }
  }
}
</script>
