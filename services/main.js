export default ($axios) => {
  return {
    contact: async (params) => {
      return await $axios.post('api/contact', params)
    },
  }
}
