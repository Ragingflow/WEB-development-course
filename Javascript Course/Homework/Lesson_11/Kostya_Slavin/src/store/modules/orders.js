import { apiUrlLocal} from "../../shared/base-api"
import Vue from "vue"

const state = {
	orders: []
}

const getters = {
	getOrders: state => {
		return state.orders
	}
}

const mutations = {
	setOrders: (state, payload) => {
		state.orders = payload
	},
	deleteOrder: (state, payload) => {
		state.orders = state.orders.filter(order => order.id !== payload)
	}
}

const actions = {
	setOrder: ({ commit, dispatch }, payload) => {
		Vue.http.post(`${apiUrlLocal}/orderList`, payload)
			.then(res => res.json())
			.then(res => dispatch('getOrders', res.email))
			.catch(error => console.log('error ', error))
	},
	getOrders: ({ commit }, payload) => {
		Vue.http.get(`${apiUrlLocal}/orderList`)
			.then(res => res.json())
			.then(res => {
				res
					? commit('setOrders', res.filter(order => order.email === payload))
					: null
			})
			.catch(error => console.log('error ', error))
	},
	deleteOrder: ({ commit }, payload) => {
		Vue.http.delete(`${apiUrlLocal}/orderList/${payload}`)
			.then(res => res.json())
			.then(res => commit('deleteOrder', payload))
			.catch(error => console.log('error ', error))
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}