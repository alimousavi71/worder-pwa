<template>
  <div class="flex gap-2.5 justify-center items-center mb-2">
    <span v-for="(star,index) in stars" :class="{'fas fa-star':star.select,'fal fa-star':!star.select}" :key="index" class="text-2xl text-yellow-500 cursor-pointer transition-all duration-500" @click="selectRate(index)"></span>
  </div>
</template>

<script>
export default {
  name:'AppRateInput',
  props: {
  },
  data() {
    return {
      stars:[]
    }
  },
  mounted() {
    const self = this;
    // Remove watcher from vuex
    this.$store.state.setting.rates.forEach(function (item){
      self.stars.push({
        value:item.value,
        key:item.key,
        description:item.description,
        select:item.select,
      });
    });
  },
  methods: {
    selectRate(index){
      this.stars = this._.map(this.stars, obj => ({ ...obj, select: false }));
      for (let i = 0; i <= index; i++) {
        this.stars[i].select = true;
      }
      this.$emit('change', this.stars[index].key)
    },
  },

}
</script>

<style scoped>
</style>
