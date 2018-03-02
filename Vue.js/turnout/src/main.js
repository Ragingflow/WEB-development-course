import Vue from 'vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'

import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueRouter);


import store from './store'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/dashboard', component: Dashboard},
        {path: '/signin', component: SignIn},
        {path: '/signup', component: SignUp}
    ]
});


firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch('signIn', user);
        router.push('/dashboard')
    } else {
        if(location.pathname != '/signup'){
            router.replace('/signin')
        }
    }
});


import { toggle } from "./mixins/toggle";

/*

//modal
const Modal = {
    template: '#modal',
    mixins: [toggle],
    components: {
        appChild: Child
    }
}

//tooltip
const Tooltip = {
    template: '#tooltip',
    mixins: [toggle],
    components: {
        appChild: Child
    }
}

*/


Vue.mixin({
    mounted() {
        console.log('hello from global mixin!')
    }
})





new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    mixins: [toggle],
    methods: {
        sayHello: function() {
            console.log('hello')
        }
    },
    mounted() {
        this.sayHello()
    }
})
