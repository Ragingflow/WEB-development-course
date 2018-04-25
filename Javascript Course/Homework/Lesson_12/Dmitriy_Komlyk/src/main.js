import Vue from 'vue'
import vModal from 'vue-js-modal'
import VueValidate from 'vuelidate'
import VueRouter from 'vue-router'

Vue.use(vModal);
Vue.use(VueValidate);
Vue.use(VueRouter);

 // Components
import App from './App.vue'
import CartOrders from './components/CartOrders'
import BookList from './components/BookList'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Data  Store
import store from './store'

// Routes
const routes = [
  {path: '/', component: BookList},
  {path: '/card', component: CartOrders},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
});
