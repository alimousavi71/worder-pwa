<template>
  <div class="bg-black overflow-hidden">
    <div class="container mx-auto">
      <div class="w-full h-screen mx-auto flex flex-col justify-between" :class="{'':getIsBottomNavVisible}">
        <AppBar/>
        <div class="flex-grow" ref="container">
          <Nuxt/>
        </div>
        <AppNavigation v-if="getIsBottomNavVisible"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import AppNavigation from "~/components/general/AppNavigation";
import AppBar from "~/components/general/AppBar";


export default {
  middleware: 'auth',
  auth: true,
  components: {AppBar, AppNavigation},
  computed: {
    ...mapGetters("main", [
      "getIsBottomNavVisible",
    ]),

    isBottomNavVisible() {
      return this.$store.state["main/isBottomNavVisible"];
    },
  },
  mounted() {
    // this.fakeLogin();
  },
  methods: {
    async fakeLogin() {
      await this.$auth.loginWith('local', {
        data: {
          email: 'arman34@example.org',
          password: '12345678',
        },
      })
    }
  }
}
</script>
