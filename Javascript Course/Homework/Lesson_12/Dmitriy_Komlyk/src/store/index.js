import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

import {mutations} from './mutation';
import * as actions from './actions';

const state = {
  books: {},
  orderList: []
};


export default new Vuex.Store({
  state,
  mutations,
  actions
});
