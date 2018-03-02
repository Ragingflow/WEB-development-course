import Vue from 'vue'
import App from './App.vue'

import store from './store'

import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);


let vm = new Vue({
  el: '#app',
  render: h => h(App),
  store
});
