<template>
  <div id="app">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col header-search-form">
            <img width="300px" src="./assets/img/logo.png">
            <h3>{{ title }}</h3>
          </div>
        </div>

        <div class="row justify-content-md-center">
          <div class="col"><router-link class="link" to="/"><i class="fa fa-home" style="font-size: 50px;"></i></router-link></div>
          <div class="search-form">
            <form class="form-inline">
              <input class="form-control" name="search" type="search" id="searchBookValue" v-model.trim="bookName">
              <button type="button" name="button" class="btn btn-primary" v-on:click="initBooks(bookName)">Search</button>
            </form>
          </div>
          <div class="col"><router-link class="link" to="/card"><i class="fa fa-shopping-cart" style="font-size: 50px"></i></router-link></div>
        </div>

      </div>

      <router-view></router-view>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
  name: 'app',
  data () {
    return {
       title: 'Search Book',
       bookName:''
    }
  },
    methods: mapActions([
      'initBooks',
    ]),
}
</script>


