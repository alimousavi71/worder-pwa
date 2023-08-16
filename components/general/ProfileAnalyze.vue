<template>
  <div>
    <div v-for="(item,i) in items" :key="i" class="bg-secondary rounded-lg p-4 mb-3">
      <div class="flex justify-between items-center">
        <span class="text-white text-lg" v-text="item.title"></span>
        <span class="bg-green-500 text-white px-5 pt-2.5 pb-1 font-black text-center rounded-full min-w-[90px]" v-text="item.counter"></span>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'ProfileAnalyze',
  data() {
    return {
      items: [
        {
          title: this.$t('wordReviews'),
          counter: '10K',
          link: ''
        },
        {
          title: this.$t('exams'),
          counter: '20',
          link: ''
        },
        {
          title: this.$t('newWords'),
          counter: '10',
          link: ''
        },
        {
          title: this.$t('allWords'),
          counter: '10',
          link: ''
        }
      ]
    }
  }
}
</script>
