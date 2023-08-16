<template>
  <div class="pt-2">
    <h1 class="text-white text-center font-bold text-2xl mb-4" v-text="word.word"></h1>
    <div class="item" v-for="(report,index) in reports" @click="selectReason(index)"
         :key="index">
      <div class="text-white text-md" v-text="report.description"></div>
    </div>
    <AppButton :loading="loading" @click="sendReport" :disabled="!reportId" class="mt-4" :label="$t('reportSubmit')" full/>
  </div>
</template>
<script>
import AppButton from "~/components/form/AppButton";

export default {
  name: 'AppReportSelect',
  props:{
    word:{
      type:Object,
      default: () => ({}),
    },
  },
  components: {
    AppButton
  },
  data() {
    return {
      reports: [],
      reportId:null,
      loading:false
    };
  },
  mounted() {
    this.reports = this.$store.state.setting.reportTypes;
  },
  methods: {
    selectReason(index){
      this.reportId = this.reports[index].key;
    },
    async sendReport(){
      try {
        this.loading = true
        const {data} = await this.$wordService.report({
          reason_id:this.reportId,
          word_id:this.word.id,
        })
        this.loading = false
        this.$toast.success(data.message);
        this.$emit("done");
      } catch (error) {
        this.loading = false
      }
    }
  }
}
</script>
<style scoped>
.item{
  @apply  py-4 cursor-pointer px-5 mb-3 rounded border shadow bg-secondary/15 border-secondary hover:bg-green-700 transition-all delay-200
}
</style>
