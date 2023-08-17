<template>
  <div>
    <h1 class="text-3xl">Exam</h1>
  </div>
</template>

<script>
export default {
  name: 'ExamPage',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Exam');
  }
}
</script>
