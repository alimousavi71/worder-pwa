export default ($axios) => {
  return {
    dashboard: async (params) => {
      return await $axios.get('api/profile')
    },
    update: async (params) => {
      return await $axios.patch('api/profile', params)
    },
    password: async (params) => {
      return await $axios.patch('api/profile/password', params)
    },
    avatarUpdate: async (params) => {
      return await $axios.patch('api/profile/avatar', params)
    },
    signout: async (params) => {
      return await $axios.post('api/profile/signout', params)
    },
  }
}
