<template>
  <div ref="container" class="text-center">

    <AppAvatar class="mb-4"/>

    <ValidationObserver ref="form" v-slot="{}">
      <form autocomplete="off">
        <ValidationProvider
            v-slot="{ errors }"
            :name="$t('profile.form.firstName')"
            rules="required|min:3"
        >
          <AppTextField
              v-model="firstName"
              icon="fas fa-pen"
              :label="$t('profile.form.firstName')"
              :errors="errors"
              :placeholder="$t('profile.form.firstName')"
          />
        </ValidationProvider>

        <ValidationProvider
            v-slot="{ errors }"
            :name="$t('profile.form.lastName')"
            rules="required|min:3"
        >
          <AppTextField
              v-model="lastName"
              icon="fas fa-pen"
              :label="$t('profile.form.lastName')"
              :errors="errors"
              :placeholder="$t('profile.form.lastName')"
          />
        </ValidationProvider>

        <AppButton
            theme="medium"
            color="leaf-06"
            icon="fas fa-check"
            class="mt-2"
            :loading="loading"
            :full="true"
            :disabled="loading"
            :label="$t('profile.form.submit')"
            @click="submit"
        />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import gsap from "gsap";
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import AppTextField from "~/components/form/AppTextField";
import AppButton from "~/components/form/AppButton";
import AppAvatar from "~/components/general/AppAvatar";

export default {
  name: 'ProfileEditPage',
  components: {
    ValidationProvider,
    ValidationObserver,
    AppAvatar,
    AppButton,
    AppTextField,
  },
  data() {
    return {
      firstName: this.$auth.user.firstname,
      lastName: this.$auth.user.lastname,
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('nav.profileEdit'),
    }
  },
  mounted() {
    this.$store.commit('main/setAppbarTitle', this.$t('nav.profileEdit'));
    this.setMotion();
    this.startMotion()
  },
  methods:{

    setMotion(){
      gsap.set(this.$refs.container, {
        opacity: 0,
        y: 50,
      });
    },

    startMotion() {
      const self = this;
      gsap.to(this.$refs.container, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.in",
        onComplete() {
          gsap.set(self.$refs.container, {clearProps: "all"});
        }
      });
    },

    submit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        this.profileUpdate()
      })
    },

    async profileUpdate() {
      try {
        this.loading = true

        const {data} = await this.$profileService.update({
          firstname:this.firstName,
          lastname:this.lastName,
        })

        this.$toast.success(data.message)
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
  }
}
</script>
