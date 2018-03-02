import * as types from './mutation-types'

export const mutations = {
	[types.INIT_BOOKS](state, payload) {
		state.books.splice(0)
		state.books.push(...payload)
	}
}