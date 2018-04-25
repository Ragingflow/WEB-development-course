<template>
    <div>
        <div>
            <modal v-if="showModal" :books="books" v-for="(id, index) in initial_ids = [id]" @close="showModal = false"
                   :id="id"
                   :key="index"/>
        </div>
        <div id="result">
            <img :src="books.items[id].volumeInfo.imageLinks.thumbnail" />
            <p class="title">{{books.items[id].volumeInfo.title}}</p>
            <p class="author" v-if="books.items[id].volumeInfo.authors">{{books.items[id].volumeInfo.authors.join(',')}}</p>
            <p class="date" v-if="books.items[id].volumeInfo.publishedDate">{{books.items[id].volumeInfo.publishedDate.split("-").reverse().join(".")}}</p>
            <button @click="showModal = true">Заказать</button>
        </div>
    </div>
</template>

<script>
    import books from './books'
    import modal from './modal'

    export default {
        name: 'bookslist',
        props: ['books', 'id'],
        data(){
            return{
                bookslist: {},
                showModal: false,
                initial_ids: [],

                email: "",
                name: "",
                phone: "",
            }
        },
        components: {
            books,
            modal
        }
    }
</script>