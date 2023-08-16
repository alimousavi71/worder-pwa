<template>
  <div class="flex flex-col items-center">
    <auth-header :title="$t('auth.reset.title')"></auth-header>
    <ValidationObserver ref="form" v-slot="{}">
      <form class="form-auth mt-5" autocomplete="off">
        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('auth.reset.email')"
          rules="required|email"
        >
          <AppTextField
            v-model="email"
            icon="fal fa-envelope"
            :label="$t('auth.reset.email')"
            :errors="errors"
            :placeholder="$t('auth.reset.email')"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('auth.reset.code')"
          rules="required"
        >
          <AppTextField
            v-model="code"
            icon="fal fa-key"
            :label="$t('auth.reset.key')"
            :errors="errors"
            :placeholder="$t('auth.reset.code')"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('auth.reset.password')"
          rules="required|min:6"
        >
          <AppTextField
            v-model="password"
            type="password"
            icon="fal fa-lock"
            :label="$t('auth.reset.password')"
            :errors="errors"
            :placeholder="$t('auth.reset.password')"
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
          :label="$t('auth.reset.submit')"
          @click="submit"
        />
      </form>
    </ValidationObserver>

    <nuxt-link class="mt-5 d-block text--white" to="/auth/login">
      <span
        class="text-white text-xs font-light"
        v-text="$t('auth.reset.login')"
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
      code: '',
      password: '',
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
        this.resetRequest()
      })
    },
    async resetRequest() {
      try {
        this.loading = true
        const { data } = await this.$authService.reset({
          email: this.email,
          code: this.code,
          password: this.password,
        })
        this.loading = false
        this.$toast.success(data.message)
        await this.$router.push({
          path: '/auth/login',
        })
      } catch (error) {
        this.loading = false
      }
    },
  },
}
</script>
