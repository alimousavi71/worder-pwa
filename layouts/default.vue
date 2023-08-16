<template>
  <div class="bg-primary">
    <div class="container mx-auto">
      <div class="w-full h-screen mx-auto relative overflow-y-scroll" :class="{'pb-16':getIsBottomNavVisible}">
        <Nuxt />
        <AppNavigation v-if="getIsBottomNavVisible"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppNavigation from "~/components/general/AppNavigation";

export default {

  components: {AppNavigation },
  computed: {
    ...mapGetters("main", [
      "getIsBottomNavVisible",
    ]),

    isBottomNavVisible() {
      return this.$store.state["main/isBottomNavVisible"];
    },
  },
}
</script>
