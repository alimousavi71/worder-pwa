<template>
  <div class="flex flex-col items-center">
    <auth-header :title="$t('auth.forget.title')"></auth-header>
    <ValidationObserver ref="form" v-slot="{}">
      <form class="form-auth mt-5" autocomplete="off">
        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('auth.forget.email')"
          rules="required|email"
        >
          <AppTextField
            v-model="email"
            icon="fal fa-envelope"
            :label="$t('auth.forget.email')"
            :errors="errors"
            :placeholder="$t('auth.forget.email')"
          />
        </ValidationProvider>

        <AppButton
          theme="medium"
          color="leaf-06"
          icon="fal fa-angle-left"
          class="mt-2"
          :loading="loading"
          :reverse-icon="true"
          :full="true"
          :disabled="loading"
          :label="$t('auth.forget.submit')"
          @click="submit"
        />
      </form>
    </ValidationObserver>

    <nuxt-link class="mt-5 d-block text--white" to="/auth/login">
      <span
        class="text-white text-xs font-light"
        v-text="$t('auth.forget.login')"
      ></span>
    </nuxt-link>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import AuthHeader from '~/components/general/AuthHeader'
import AppTextField from "~/components/form/AppTextField";
import AppButton from "~/components/form/AppButton";

export default {
  auth: 'guest',
  name: 'Login',
  components: {
    AppButton,
    AppTextField,
    ValidationObserver,
    ValidationProvider,
    AuthHeader,
  },
  layout: 'auth',
  data() {
    return {
      email: '',
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('auth.forget.title'),
    }
  },
  mounted() {},

  methods: {
    submit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.forgetRequest()
      })
    },
    async forgetRequest() {
      try {
        this.loading = true
        const { data } = await this.$authService.forget({
          email: this.email,
        })
        this.loading = false
        this.$toast.success(data.message)
        await this.$router.push({
          path: '/auth/reset',
        })
      } catch (error) {
        this.loading = false
      }
    },
  },
}
</script>
