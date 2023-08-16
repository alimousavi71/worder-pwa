<template>
  <div class="flex fixed bottom-0 w-full">
    <nuxt-link
      v-for="(item, i) in items"
      :key="i"
      class="flex flex-col items-center justify-center px-5 h-16 transition-all duration-300 bg-secondary flex-grow"
      :to="item.link"
    >
      <span class="fal mt-1 mb-1 text-white text-xl" :class="item.icon"></span>
      <span class="text-white text-sm" v-text="item.title"></span>
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
          link: '/profile',
          icon: 'fa-home',
        },
        {
          title: this.$t('nav.exam'),
          link: '/profile/exam',
          icon: 'fa-check-circle',
        },
        {
          title: this.$t('nav.sentence'),
          link: '/profile/sentence',
          icon: 'fa-text',
        },
        {
          title: this.$t('nav.user'),
          link: '/profile/profile',
          icon: 'fa-user',
        },
      ],
    }
  },
}
</script>
