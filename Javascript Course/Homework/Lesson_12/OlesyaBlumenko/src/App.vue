<template>
  <div id="app">
    <input type="text" id="search" >
    <button type="submit" class="btn" @click = "initBooks">Отправить</button>
    <Order v-for = "(item, index) in $store.state.orders"
    :item = "item"
    :key = "index"/>

  <BooksInfo
  v-for="(book, index, id) in $store.state.books"
  :book = "book"
  :key = "index"
  />

</div>
</template>

<script>
import {mapActions} from 'vuex'
import BooksInfo from './booksInfo.vue'
import Order from "./order.vue"

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods:mapActions([
    'initBooks'
  ]) ,
  components:{
    BooksInfo,
    Order
  }
}
</script>

<style>




</style>
