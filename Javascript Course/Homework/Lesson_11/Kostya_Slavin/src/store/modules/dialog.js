import Vue from "vue"

const state = {
	dialog: false
}

const getters = {
	getDialogStatus: state => {
		return state.dialog
	}
}

const mutations = {
	changeDialogStatus: (state) => {
		state.dialog = !state.dialog
	},
}

export default {
	state,
	getters,
	mutations
}