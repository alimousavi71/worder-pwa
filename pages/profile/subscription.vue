<template>
  <div>
    <h1 class="text-3xl">Subscription Page</h1>
  </div>
</template>

<script>
export default {
  name: 'ProfileSubscriptionPage',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Subscription');
  }
}
</script>
