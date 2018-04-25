import * as types from './mutation-types'

export const initBooks = ({commit}) => {
	let bookName = document.getElementById('bookName').value;
	fetch('https://www.googleapis.com/books/v1/volumes?q=' + bookName, {
		method: 'GET'
	})	
		.then(response => response.json())
		.then(json => commit(types.INIT_BOOKS, json.items))
}
