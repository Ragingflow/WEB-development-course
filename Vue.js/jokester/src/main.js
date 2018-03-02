import Vue from 'vue'
import App from './App.vue'

import store from './store'

// store.commit('INIT_JOKES', [{test: 'test_joke'}]);

new Vue({
  el: '#app',
  render: h => h(App),
  store
});
