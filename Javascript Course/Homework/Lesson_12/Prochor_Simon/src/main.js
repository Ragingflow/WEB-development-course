import Vue from 'vue'
import VueResource from 'vue-resource'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css' // This line here


import VInputmask from 'v-inputmask';




import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'

import App from './App.vue'


import Cart from './components/Cart.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VInputmask);
Vue.use(VueRouter);


import store from './store';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
    ],
});

router.beforeEach((to, from, next) => {
    next();

    const title = document.getElementById('router__title');
    const search = document.getElementsByClassName('search')[0];

    if( typeof search != 'undefined' || typeof title != 'undefined') {
        if( title ) {
            title.innerText = `${to.name}`;
        }

        if( to.name != 'Dashboard' ){
            search.style.display = 'none';
        } else {
            search.style.display = '';
        }
    }

    document.title = to.name;

});


firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch('signIn', user);
        //router.push('/')

    } else {
        if(router.history.current.name == 'Cart'){
            router.replace('/')
        }

    }
});



new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
