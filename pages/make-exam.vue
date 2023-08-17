<template>
  <div>
    <h1 class="text-3xl">MakeExamPage</h1>
  </div>
</template>

<script>
export default {
  name: 'MakeExamPage',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Exam');
  }
}
</script>
