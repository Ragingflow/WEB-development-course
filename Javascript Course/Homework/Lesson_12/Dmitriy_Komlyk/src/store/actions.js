import Vue from 'vue'
import * as types from './mutation-types'

export const initBooks = ({commit}, bookName) => {
  Vue.http.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
    .then(response => response.json())
    .then(json => commit(types.INIT_BOOKS, json));
};
