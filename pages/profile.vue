<template>
  <div class="p-3">
    <ProfileHeader/>
    <div>
      <ul>
        <li v-for="(item,index) in items" :key="index" class="mb-3">
          <NuxtLink :to="item.to" class="item">
            <div class="flex gap-3">
              <span class="mt-1" :class="item.icon"></span>
              <span class="font-medium" v-text="item.title"></span>
            </div>
            <span class="fas fa-angle-left"></span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProfileHeader from '~/components/general/ProfileHeader'

export default {
  name: 'ProfilePage',
  components: {
    ProfileHeader,
  },
  data() {
    return {
      items: [
        {
          title: this.$t('profile.menu.profile'),
          icon: 'fas fa-home',
          to: 'profile/edit'
        },
        {
          title: this.$t('profile.menu.password'),
          icon: 'fas fa-key',
          to: 'profile/password'
        },
        {
          title: this.$t('profile.menu.subscription'),
          icon: 'fas fa-cart-shopping',
          to: 'profile/password'
        },
        {
          title: this.$t('profile.menu.support'),
          icon: 'fas fa-phone',
          to: 'profile/support'
        },
        {
          title: this.$t('profile.menu.signout'),
          icon: 'fas fa-person-from-portal',
          to: 'profile/support'
        }
      ],
    }
  },
  mounted() {
    this.$store.commit('main/setAppbarTitle', this.$t('nav.profile'));
  },
  methods: {
    async goTo(route) {
      await this.$router.push('/profile/learning')
    },
  }
}
</script>
<style>
.item {
  @apply text-white bg-base1 px-5 py-5 flex rounded-lg justify-between items-center hover:bg-secondary transition-all duration-300
}
</style>
