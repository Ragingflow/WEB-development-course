<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" v-on:submit.prevent="initBooks(q)">
            <div class="form-group">
              <input
                id="exampleInputName2"
                type="search"
                class="form-control mr-2"
                placeholder="Название книги"
                v-model="q">
            </div>
            <button type="submit" class="btn btn-dark">Искать</button>
          </form>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-8">
          <div class="card-columns">
            <div v-for="(book, index) in $store.state.books"
               :key="index">
              <div class="card">
                <img class="card-img-top"
                   v-if="book.volumeInfo.imageLinks"
                   :src="book.volumeInfo.imageLinks.smallThumbnail">
                <div class="card-body">
                  <h4 class="card-title"
                    v-if="book.volumeInfo.title">
                    {{ book.volumeInfo.title }}
                  </h4>
                  <p class="card-text"
                    v-if="book.volumeInfo.authors">
                    {{ book.volumeInfo.authors[0] }}
                  </p>
                  <a href="#"
                    class="btn btn-primary"
                    data-toggle="modal"
                    name="order"
                    data-target="#order-modal"
                    @click="initPopup(index)">
                    Заказать
                  </a>
                </div>
                <div class="card-footer"
                  v-if="book.volumeInfo.publishedDate">
                  <small class="text-muted">
                    {{ toLocalDate(book.volumeInfo.publishedDate) }}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <h2>Мои заказы</h2>
          <Item
            v-for="(order, index) in $store.state.orders"
            :order="order"
            :key="index"
          />
        </div>
      </div>

      <Popup
        :popup="$store.state.popup"
      />

    </div>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap';
import { mapActions } from 'vuex';
import Popup from './components/Popup';
import Item from './components/Item';

export default {
  name: 'App',
  data() {
    return {
      q: '',
    };
  },
  methods: {
    ...mapActions([
      'initBooks',
      'initPopup',
      'addOrder',
    ]),

    toLocalDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Intl.DateTimeFormat('uk-UA', options).format(Date.parse(date));
    },
  },
  components: { Popup, Item },
};
</script>

<style>

    body {
        margin-top: 30px;
    }

</style>
