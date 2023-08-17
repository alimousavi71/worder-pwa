<template>
  <div>
    <h1 class="text-3xl">Password Update</h1>
  </div>
</template>

<script>
export default {
  name: 'ProfilePasswordPage',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Password Update');
  }
}
</script>
