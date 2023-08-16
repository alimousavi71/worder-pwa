<template>
  <div class="flex flex-col justify-center items-center h-full relative p-5 overflow-hidden">

    <AppModal v-if="words.length" :title="$t('reportModalTitle')" :open="reportModalOpen" @status="closeReport">
      <template v-slot:content>
        <AppReportSelect @done="closeReport" :word="words[currentIndex]"/>
      </template>
    </AppModal>

    <AppLoading :active="loading"/>

    <template v-if="words.length">

      <div class="absolute top-0 left-0 p-5 flex justify-between items-center w-full" ref="counter">
        <AppButton icon="fas fa-home" @click="backToHome"/>
        <AppCounter :count="words.length" :current="currentIndex + 1"/>
        <AppButton :label="$t('report')" icon="fas fa-bug" @click="report"/>
      </div>

      <h1 ref="word" class="text-white text-center font-black text-6xl mb-4"
          v-text="words[this.currentIndex].word"></h1>
      <h2 ref="translate" class="text-white text-center font-medium text-3xl mb-8"
          v-text="words[this.currentIndex].translate"></h2>

      <span ref=playBtn>
        <AppPlayButton/>
      </span>

      <div class="absolute bottom-0 w-full px-5 py-5" ref="nextBtn">
        <AppButton :disabled="!nextActive" :loading="pickUploading" full icon="fal fa-angle-left" reverse-icon theme="large"
                   :label="$t('wordNext')" @click="nextWord"/>
      </div>
    </template>

  </div>
</template>

<script>
import gsap from "gsap";
import AppLoading from "~/components/form/AppLoading";
import AppPlayButton from "~/components/general/AppPlayButton";
import AppButton from "~/components/form/AppButton";
import AppCounter from "~/components/general/AppCounter";
import AppModal from "~/components/general/AppModal";
import AppReportSelect from "~/components/general/AppReportSelect";

export default {
  name: 'ProfileLearning',
  components: {AppReportSelect, AppModal, AppCounter, AppButton, AppPlayButton, AppLoading},
  head:{
    title:'Worder - Learning'
  },
  data() {
    return {
      currentIndex: 0,
      nextActive: true,
      loading: false,
      pickUploading: false,
      reportModalOpen: false,
      audio: {
        next: null
      },
      words: [],
    }
  },
  mounted() {
    this.$store.dispatch('main/hideBottomNav');
    this.getWords();
    this.audio.next = new Audio('/click.mp3');
  },
  beforeDestroy() {
    this.$store.dispatch('main/showBottomNav');
  },
  methods: {
    closeReport(){
      this.reportModalOpen = false
    },
    report(){
      this.reportModalOpen = true
    },
    backToHome(){
      this.$router.push('/profile');
    },
    async getWords() {
      try {
        this.loading = true
        const {data} = await this.$wordService.learn()
        this.loading = false
        this.words = data.data
        this.currentIndex = 0;
      } catch (error) {
        this.loading = false
      }
    },

    async pickupWords() {
      try {
        this.pickUploading = true
        await this.$wordService.pickup({
          word_id:this.words[this.currentIndex].id
        })
        this.pickUploading = false
      } catch (error) {
        this.pickUploading = false
      }
    },
    nextWord() {

      this.audio.next.play();
      this.pickupWords();

      const tl = gsap.timeline({
        onStart: () => {
          this.nextActive = false;
        },
        onComplete: () => {
          setTimeout(() => {
            this.nextActive = true;
          }, 1800)

          if (this.currentIndex < this.words.length - 1) {
            this.currentIndex++;
          } else {
            this.currentIndex = 0;
          }
          tl.reverse();
        }
      });
      tl.to(this.$refs.word, {
        opacity: 0,
        y: -30,
        rotate: 5,
        scale: 0.7,
        duration: 0.5,
        ease: "power2.inOut"
      }).to(this.$refs.translate, {
        opacity: 0,
        y: -30,
        rotate: -5,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0.3).to(this.$refs.playBtn, {
        opacity: 0,
        scale: 0.7,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0.6).to(this.$refs.counter, {
        opacity: 0,
        y: -100,
        rotate: -5,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0.9)

    },
  },

}
</script>
