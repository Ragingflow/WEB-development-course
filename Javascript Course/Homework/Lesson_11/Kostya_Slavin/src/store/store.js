import Vue from "vue"
import Vuex from 'vuex'

import books from './modules/books'
import orders from './modules/orders'
import dialogStatus from './modules/dialog'
import search from './modules/search'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		books,
    orders,
		dialogStatus,
    search,

	}
})
