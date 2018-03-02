import { apiUrlGoogle } from "../../shared/base-api"
import Vue from "vue"

const state = {
  books: [],
  book: {}
}

const getters = {
  getAllBooks: state => {
    return state.books
  },
  getSelectedBook: state => {
    return state.book
  }
}

const mutations = {
  setBooks: (state, payload) => {
    state.books = payload
  },
  selectBook: (state, payload) => {
    state.book = payload
  },
  cleanSelectedBook: (state) => {
    state.book = null
  }
}

const actions = {
  searchBooks: ({ commit }, payload) => {
    Vue.http.get(`${apiUrlGoogle.api}/${apiUrlGoogle.props[0].vol}=${payload}`)
    // &${apiUrlGoogle.props[0].orderBy}&${apiUrlGoogle.props[0].printType}=books
      .then(res => res.json())
      .then(res => {
        commit('setBooks', res.items)
        commit('cleanSelectedBook')
      })
      .catch(error => console.log('error ', error))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
