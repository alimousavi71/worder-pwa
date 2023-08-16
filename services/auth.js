export default ($axios) => {
  return {
    login: async (params) => {
      return await $axios.post('api/auth/login', params)
    },
    forget: async (params) => {
      return await $axios.post('api/auth/forget', params)
    },
    reset: async (params) => {
      return await $axios.post('api/auth/reset', params)
    },
    resend: async (params) => {
      return await $axios.post('api/auth/resend', params)
    },
    googleLogin: async (params) => {
      return await $axios.post('api/auth/login/socialTab', params)
    },
  }
}
