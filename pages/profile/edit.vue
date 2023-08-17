<template>
  <div>
    <h1 class="text-3xl">Profile Edit</h1>
  </div>
</template>

<script>
export default {
  name: 'ProfileEditPage',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Profile Edit');
  }
}
</script>
