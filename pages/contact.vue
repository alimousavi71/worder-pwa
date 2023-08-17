<template>
  <div>
    <h1 class="text-3xl">Contact</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Exam');
  }
}
</script>
