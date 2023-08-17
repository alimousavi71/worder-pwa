export const state = () => ({
  isBottomNavVisible: true,
  isBackVisible: true,
  appBarTitle: 'Worder',
})

export const mutations = {
  setBottomNavVisibility(state, isVisible) {
    state.isBottomNavVisible = isVisible
  },
  setBackVisibility(state, isVisible) {
    state.isBackVisible = isVisible
  },
  setAppbarTitle(state, title) {
    state.appBarTitle = title
  },
}

export const actions = {
  hideBottomNav({ commit }) {
    commit('setBottomNavVisibility', false)
  },
  hideBackNav({ commit }) {
    commit('setBackVisibility', false)
  },
  showBottomNav({ commit }) {
    commit('setBottomNavVisibility', true)
  },
}

export const getters = {
  getIsBottomNavVisible: (state) => {
    return state.isBottomNavVisible
  },
  getAppbarTitle: (state) => {
    return state.appBarTitle
  },
}
