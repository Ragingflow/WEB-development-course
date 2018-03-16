import * as types from './mutation-types';

export const initBooks = ({ commit }, query) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
    method: 'GET',
  }).then(response => response.json())
    .then(json => commit(types.INIT_BOOKS, json.items));
};

export const initPopup = ({ commit }, index) => {
  commit(types.INIT_POPUP, index);
};

export const addOrder = ({ commit }, { item, name, email, phone }) => {
  commit(types.ADD_ORDER, { item, name, email, phone });
};
