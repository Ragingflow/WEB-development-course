import Vue from 'vue';
import VueRouter from 'vue-router';


import App from './App.vue';
import Data from './components/Data.vue';



Vue.use(VueRouter);

const routes = [
    { path: '/data/:type', component: Data,

        children: [
            { path: '/name', component: Data}
        ]
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});



new Vue({
    el: '#app',
    render: h=>h(App),
    router
});