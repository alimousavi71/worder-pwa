<template>
  <div>
    <button class="hidden" type="button" @click="signout">Signout</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    async signout() {
      await this.$auth.logout()
      await this.$router.push({
        path: '/auth/login',
      })
    },
  },
}
</script>
