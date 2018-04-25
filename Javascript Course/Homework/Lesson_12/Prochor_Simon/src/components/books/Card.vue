<template>
    <md-card>
        <md-card-area>
        <md-card-media>
            <img :src="book.thumbnail" alt="People">
        </md-card-media>

        <md-card-header>
            <div class="md-title">{{ book.title }}</div>
            <div class="md-subhead">{{book.authors}}</div>

        </md-card-header>
        </md-card-area>



        <md-card-actions md-alignment="space-between">

            <div class="md-subhead">
                <md-icon>date_range</md-icon>
                <span>{{book.date}}</span>
            </div>
            <md-button class="md-raised md-primary" v-if="!incart" @click="showDialog = true">Order</md-button>
            <md-button class="md-raised md-accent" v-if="incart" @click="removeFromCart(book.key)">Remove</md-button>
        </md-card-actions>


        <Popup v-if="!incart" :book="book" :showDialog="showDialog" @close="showDialog = false"></Popup>

    </md-card>

</template>

<script>
    import {booksRef} from '../../firebaseApp';

    import Popup from './Popup.vue'

    import {mapActions} from 'vuex';

    export default {
        name: 'Card',
        props: ['book', 'incart', 'index'],
        data: () => ({
            showDialog: false
        }),
        methods: {
	        removeFromCart(key){
		        booksRef.child(key).remove(  );
		        console.log(key);
            }
        },
        components: {
            Popup
        }
    }
</script>

<style lang="scss" scoped>
    .md-card {
        margin-bottom: 40px;
    }
</style>