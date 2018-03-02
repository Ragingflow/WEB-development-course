import Vue from 'vue'
import VueResource from 'vue-resource'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(VueResource)
Vue.http.interceptors.push((request, next)  => {
  NProgress.start();
  next((response) => {
    NProgress.done();    
  })
})

// export const showLoader = false;

export const apiUrlLocal = 'http://localhost:3030'
export const apiUrlGoogle = {
  api: 'https://www.googleapis.com/books/v1',
  props: [
    { vol:'volumes?q' },
    { orderBy: 'orderBy=newest' },
    { printType: 'printType=' }
  ]
}
