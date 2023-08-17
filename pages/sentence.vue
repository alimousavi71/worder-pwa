<template>
  <div>
    <h1 class="text-3xl">Sentence</h1>
  </div>
</template>

<script>
export default {
  name: 'SentencePage',
  mounted() {
    this.$store.commit('main/setAppbarTitle', 'Sentence');
  }
}
</script>
