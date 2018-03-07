import Vue from 'vue';
import App from './App';
import Vuelidate from 'vuelidate';
import router from './router';
import store from './store';

Vue.use(router);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
  router,
  Vuelidate,
  store,
});
