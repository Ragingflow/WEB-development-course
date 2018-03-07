import * as types from './mutation-types';

export const mutations = {
  [types.INIT_BOOKS](state, payload) {
    state.books.push(...payload);
  },

  [types.INIT_POPUP](state, index) {
    state.books.forEach((book, value) => {
      if (value === index) {
        state.popup = book;
      };
    });
  },

  [types.ADD_ORDER](state, index) {

  }
}