<template>

	<div class = "book-card">
		<div class = "card-block">
			<div class = "book-thumb"><img :src='book.volumeInfo.imageLinks.thumbnail'></div>
			<div class = "book-title">{{ book.volumeInfo.title }}</div>
			<div class = "book-author">{{ book.volumeInfo.authors }}</div>
			<div class = "book-date">{{ properDate(book.volumeInfo.publishedDate) }}</div>
			<button id="show-modal" @click="showModal = true">Заказать</button>

			<modal 
				v-if="showModal" 
				:book = "book"
				@close="showModal = false">
		  </modal>

		</div>
	</div>

</template>

<script>
import {mapActions} from 'vuex'
import Modal from './Modal.vue'

export default {
	name: "Book",
	props: ['book'],
	data() {
		return {
			showModal: false
		}
	},
	methods: {
		properDate(date){
            let options = {
		        year: 'numeric',
		        month: 'numeric',
		        day: 'numeric'
		    };
            return new Date(date).toLocaleString("ru", options);
        }
	},
	components: {
		Modal
	}
}
</script>

<style>
.book-card {
	border: 2px solid blue;
	border-radius: 2px;
	width: 300px;
	margin: 10px;
	padding: 10px;
}
#show-modal {
	width: 200px;
	height: 40px;
	background: green;
	font-size: 20px;
	color: white;
	border: none;
	cursor: pointer;
	outline: none;
}
</style>