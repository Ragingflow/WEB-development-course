import * as types from './mutation-types'

export const mutations = {
  [types.INIT_BOOKS](state, books_payload){
    state.books = books_payload
  },

};

