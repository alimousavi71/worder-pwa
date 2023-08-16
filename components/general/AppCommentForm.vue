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
              v-model="email"
              :errors="errors"
              :placeholder="$t('comment.commentInput')"
          />
        </ValidationProvider>

        <AppButton
            theme="medium"
            color="leaf-06"
            icon="fal fa-arrow-right-to-bracket fa-rotate-180"
            class="mt-2"
            :loading="loading"
            :reverse-icon="true"
            :full="true"
            :disabled="loading"
            :label="$t('comment.submit')"
            @click="loginRequest"/>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import AppButton from "~/components/form/AppButton";
import AppTextArea from "~/components/form/AppTextArea";

export default {
  name: 'AppCommentForm',
  props:{

  },
  components: {
    AppTextArea,
    AppButton,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      loading:false
    };
  },
  mounted() {

  },
  methods: {
    async sendComment(){
      this.loading = true;
      try {
        this.loading = true
        const {data} = await this.$mainService.contact({
          comment:'Test Comment From Me!',
          rate:1,
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
