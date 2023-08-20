<template>
  <div class="flex m-3 rounded-3xl bg-secondary p-2">
    <nuxt-link
      v-for="(item, i) in items"
      :key="i"
      class="flex items-center justify-center px-3 py-2.5 rounded-full gap-2 transition-all duration-300 hover:bg-gray-900 flex-grow"
      :to="item.link"
    >
      <span class="fas mt-1 mb-1 text-white text-xl" :class="item.icon"></span>
      <span class="text-white text-sm"  v-text="item.title"></span>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      items: [
        {
          title: this.$t('nav.home'),
          link: '/',
          icon: 'fa-home',
        },
        {
          title: this.$t('nav.exam'),
          link: '/exam',
          icon: 'fa-check-circle',
        },
        {
          title: this.$t('nav.sentence'),
          link: '/sentence',
          icon: 'fa-text',
        },
        {
          title: this.$t('nav.profile'),
          link: '/profile',
          icon: 'fa-user',
        },
      ],
    }
  },
}
</script>
<style scoped>
.nuxt-link-exact-active{
  @apply bg-gray-900
}
</style>