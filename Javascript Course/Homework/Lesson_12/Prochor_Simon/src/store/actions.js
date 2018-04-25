import * as types from './mutation-types';

import Vue from 'vue';
import { booksRef  } from "../firebaseApp";

export const setCart = ({commit})=>{

    booksRef.on('value', snap=>{
        let books = [];
        snap.forEach(
            event => {
                books.push({
                    key: event.key,
                    ...event.val()
                })
            }
        );
        commit(types.SET_CART, books);

    })
};

export const searchResult = ({commit}, q)=>{
	commit(types.SEARCH_RESULT, [[], true]);

    Vue.http.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`).then( response => {
        let arr = [];

        if (response && response.body.items) {
            response.body.items.forEach((v, i, a)=>{
                arr.push({
                    'thumbnail': (v.volumeInfo.imageLinks && v.volumeInfo.imageLinks.smallThumbnail) ? v.volumeInfo.imageLinks.smallThumbnail : 'http://cdn3.bigcommerce.com/s-vvyjls/products/519/images/1740/not_all_stories_have_a_happy_ending_by_azraelthefallenangel_d5n4l2d__43716.1437583390.500.659.jpg?c=2',
                    'date': new Date( v.volumeInfo.publishedDate ).toLocaleDateString('uk-UA'),
                    'authors': typeof v.volumeInfo.authors!='undefined' ? v.volumeInfo.authors.join(', ') : null,
                    'title': v.volumeInfo.title,
                    'description': v.volumeInfo.description ? v.volumeInfo.description : 'none text...',
                });
            });
        }


        commit(types.SEARCH_RESULT, [arr, false]);

    }, error => {
        console.error(error);
	    commit(types.SEARCH_RESULT, [[], false]);
    })
};

export const signIn = ({commit}, user_payload)=>{
    commit(types.SIGN_IN, user_payload)
};

export const signOut = ({commit})=>{
    commit(types.SIGN_OUT)
};