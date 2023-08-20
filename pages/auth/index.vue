<template>
  <div class="flex flex-col items-center">
    <auth-header :title="$t('auth.login.title')"></auth-header>
    <ValidationObserver ref="form" v-slot="{}">
      <form class="form-auth mt-5" autocomplete="off">
        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('auth.login.email')"
          rules="required|email"
        >
          <AppTextField
            v-model="email"
            icon="fal fa-envelope"
            :label="$t('auth.login.email')"
            :errors="errors"
            :placeholder="$t('auth.login.email')"
          />
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          :name="$t('auth.login.password')"
          rules="required"
        >
          <AppTextField
            v-model="password"
            type="password"
            icon="fal fa-lock"
            :label="$t('auth.login.password')"
            :errors="errors"
            :placeholder="$t('auth.login.password')"
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
          :label="$t('auth.login.submit')"
          @click="loginRequest"
        />
      </form>
    </ValidationObserver>

    <nuxt-link class="mt-5 d-block text--white" to="/auth/forget">
      <span
        class="text-white text-xs font-light"
        v-text="$t('auth.login.forget')"
      ></span>
    </nuxt-link>

    <hr class="my-5 border w-[250px] border-gray-600/5" />

    <div class="d-flex justify-center">
      <div id="google_button_login"></div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import AuthHeader from '~/components/general/AuthHeader'
import AppTextField from "~/components/form/AppTextField";
import AppButton from "~/components/form/AppButton";

export default {
  layout: 'auth',
  name: 'Login',
  components: {
    AppButton,
    AppTextField,
    ValidationObserver,
    ValidationProvider,
    AuthHeader,
  },

  data() {
    return {
      email: 'babak.shahidi@example.com',
      password: '12345678',
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('auth.login.title'),
    }
  },
  mounted() {
    const self = this
    if (document.readyState === 'complete') {
      self.initGoogleButtonLogin()
    } else {
      window.onload = function () {
        self.initGoogleButtonLogin()
      }
    }
  },

  methods: {
    initGoogleButtonLogin() {
      const self = this
      window.google.accounts.id.initialize({
        client_id:
          '565105389316-io486offdndlse29l8evigbuur8fct6a.apps.googleusercontent.com',
        callback: self.handleCredentialResponse,
      })
      window.google.accounts.id.renderButton(
        document.getElementById('google_button_login'),
        {
          theme: 'filled_blue',
          size: 'large',
          shape: 'square',
          logo_alignment: 'left',
          locale: 'fa_IR',
        }
      )
      window.google.accounts.id.prompt()
    },
    handleCredentialResponse(response) {
      this.googleLogin(response)
    },

    async googleLogin(credential) {
      try {
        this.loading = true
        const { data } = await this.$authService.googleLogin({
          clientId: credential.clientId,
          credential: credential.credential,
        })

        this.$toast.success(data.message)
      } catch (error) {
        this.loading = false
      }
    },

    submit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.loginRequest()
      })
    },

    async loginRequest() {
      try {
        this.loading = true

        const { data } = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$toast.success(data.message)

        await this.$router.push({
          path: '/',
        })

        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
  },
}
</script>
