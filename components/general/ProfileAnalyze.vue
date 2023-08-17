<template>
  <div class="grid grid-cols-6 gap-3">
    <div v-for="(item,i) in counters" :key="i" class="col-span-3">
      <AppCardButton :title="item.title" :icon="item.icon" :counter="item.counter.toString()"/>
    </div>
  </div>

</template>
<script>
import AppCardButton from "~/components/general/AppCardButton";
export default {
  name: 'ProfileAnalyze',
  components: {AppCardButton},
  props:{
    counters:{
      type:Array,
      default: () => ([]),
    }
  },
}
</script>
