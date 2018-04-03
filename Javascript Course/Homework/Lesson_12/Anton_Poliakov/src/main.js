import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App';
import router from './router';
import store from './store';

Vue.use(router);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

/* eslint-disable */

new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router,
  Vuelidate,
  store,
});
