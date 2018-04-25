const state = {
  searchValue: ''
}

const getters = {
  searchValue: state => {
    return state.searchValue
  }
}

const mutations = {
  setSearchQ: (state, payload) => {
    state.searchValue = payload
  }
}

export default {
  state,
  getters,
  mutations
}