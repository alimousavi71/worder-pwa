export const state = () => ({
  isBottomNavVisible: true,
})

export const mutations = {
  setBottomNavVisibility(state, isVisible) {
    state.isBottomNavVisible = isVisible
  },
}

export const actions = {
  hideBottomNav({ commit }) {
    commit('setBottomNavVisibility', false)
  },
  showBottomNav({ commit }) {
    commit('setBottomNavVisibility', true)
  },
}

export const getters = {
  getIsBottomNavVisible: (state) => {
    return state.isBottomNavVisible
  },
}
