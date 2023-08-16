export const state = () => ({
  setting: {},
})

export const mutations = {
  setSetting(state, setting) {
    console.log('Call Me!')
    state.setting = setting
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {
    const { data } = await this.$axios.get('/api/general')
    commit('setSetting', data.data)
  },
}

export const getters = {
  getSetting: (state) => {
    return state.setting
  },
}
