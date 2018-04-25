<template>
	<div id = "app">
		<div id = "books">
			<div>
				<input id = "bookName" type="text" name="">
			</div>
			<div>
				<button id = "book-button" @click = "initBooks">Выберите книгу</button>
			</div>
			<div class = "books-flex">
				<div v-for = "(book, index) in $store.state.books">	

					<Book :book = "book"
						  key = "index"
						  :index = "index"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import {mapActions} from 'vuex'
import Book from './components/Book.vue'
import Order from './components/Order.vue'

export default {
	name: 'app',
	methods: { 
		...mapActions([
			'initBooks'
		])
	},

	components: {
		Book
	}
}

</script>

<style>
#books {
	text-align: center;
}
#bookName {
	margin: 10px 0px;
	border: 1px solid grey;
	width: 200px;
	height: 40px;
	text-align: center;
	color: black;
}
#book-button {
	width: 200px;
	height: 40px;
	background: green;
	font-size: 20px;
	color: white;
	border: none;
	cursor: pointer;
	outline: none;
}
.books-flex {
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
}
</style>