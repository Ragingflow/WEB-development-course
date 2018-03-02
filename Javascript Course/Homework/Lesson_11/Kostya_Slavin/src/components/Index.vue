<template>
    <v-app>
        <v-content>
            <app-search></app-search>
            <app-order-book></app-order-book>

            <v-layout row wrap>
                <v-toolbar v-if="orders.length" flat style="margin: 10px 0;">
                    <v-toolbar-title class="grey--text text--darken-4">Orders</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <app-detail-book
                      v-for="order in orders"
                      :order="order"
                      :key="order.id + 'suffix'"
                ></app-detail-book>
            </v-layout>

            <v-layout row wrap>
                <v-toolbar v-if="books.length" flat style="margin: 10px 0;">
                    <v-toolbar-title class="grey--text text--darken-4">Search results</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <app-list-book
                      v-for="book in books"
                      :book="book"
                      :key="book.id + '-suffix'"
                ></app-list-book>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

  import Search from './Search.vue'
  import ListBook from './ListBook.vue'
  import OrderBook from './OrderBook.vue'
  import DetailBook from './DetailBook.vue'


export default {
 components: {
      'app-search':  Search,
      'app-list-book': ListBook,
      'app-order-book': OrderBook,
      'app-detail-book': DetailBook
    },
    computed: {
      ...mapGetters({
        books: 'getAllBooks',
        orders: 'getOrders'
      })
    }
}
</script>
