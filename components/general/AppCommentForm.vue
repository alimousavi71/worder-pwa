<template>
  <div>
    <ValidationObserver ref="form" v-slot="{}">
      <form class="form-auth mt-5" autocomplete="off">
        <ValidationProvider
            v-slot="{ errors }"
            :name="$t('comment.comment')"
            rules="required|min:3"
        >
          <AppTextArea
              v-model="comment"
              :errors="errors"
              :placeholder="$t('comment.commentInput')"
          />
        </ValidationProvider>

        <AppRateInput @change="updateRate" class="mb-5"/>

        <AppButton
            theme="medium"
            color="leaf-06"
            icon="fas fa-check"
            class="mt-2"
            :loading="loading"
            :full="true"
            :disabled="loading"
            :label="$t('comment.submit')"
            @click="submit"/>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import AppButton from "~/components/form/AppButton";
import AppTextArea from "~/components/form/AppTextArea";
import AppRateInput from "~/components/form/AppRateInput";

export default {
  name: 'AppCommentForm',
  props:{

  },
  components: {
    AppRateInput,
    AppTextArea,
    AppButton,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      loading:false,
      comment:'',
      rate:null,
    };
  },
  mounted() {

  },
  methods: {
    updateRate(rate){
      this.rate = rate;
    },

    submit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.sendComment()
      })
    },

    async sendComment(){
      this.loading = true;
      try {
        this.loading = true
        const {data} = await this.$mainService.contact({
          comment:this.comment,
          rate:this.rate,
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
.item{
  @apply  py-4 cursor-pointer px-5 mb-3 rounded border shadow bg-secondary/15 border-secondary hover:bg-green-700 transition-all delay-200
}
</style>
