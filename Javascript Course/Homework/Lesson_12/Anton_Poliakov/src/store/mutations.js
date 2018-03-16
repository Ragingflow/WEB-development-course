import * as types from './mutation-types';

export const mutations = {
  [types.INIT_BOOKS](state, payload) {
    state.books.push(...payload);
  },

  [types.INIT_POPUP](state, index) {
    state.popup = state.books[index];
  },

  [types.ADD_ORDER](state, payload) {
    state.orders.push(payload);
  },
};

export default mutations;
