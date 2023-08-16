export default ($axios) => {
  return {
    learn: async () => {
      return await $axios.get('api/word/learn')
    },
    pickup: async (params) => {
      return await $axios.post('api/word/pickup', params)
    },
    report: async (params) => {
      return await $axios.post('api/word/report', params)
    },
  }
}
