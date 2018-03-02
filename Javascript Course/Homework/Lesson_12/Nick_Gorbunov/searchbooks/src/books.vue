<template>
    <div>
        <div id="search" >
            <input type="search" v-model="searchString" >
            <button @click="searchBooks" >Отправить</button>
        </div>
        <div>
            <bookslist :books="books"  v-for="(id, index) in initial_ids"
                       :id="id"
                       :key="index"/>
        </div>
    </div>
</template>/

<script>
    import bookslist from './bookslist'

    export default {
        name: 'books',
        props: [],
        data(){
            return{
                books: {},
                searchString: "",
                initial_ids: [],
                showOrder: false
            }
        },
        methods: {
            searchBooks(){
                fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchString}`, {
                    method: 'GET'
                })
                     .then(
                    response => response.json())
                    .then(json=>this.books = json)
                    .then(initial_ids=>this.initial_ids = [0,1,2,3,4,5,6,7,8,9])
            }
        },
        components: {
            bookslist
        }

    }
</script>