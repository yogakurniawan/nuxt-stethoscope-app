import * as types from './mutation-types'

const state = {
	info: {},
}

export default {
  SET_USER(state, payload) {
    state.auth.user = payload
  },
  SET_ERROR(state, payload) {
    state.auth.error = payload
  },
  SET_LOADING(state, payload) {
    state.auth.loading = payload
  },
  [types.GET_INFO_ASYNC.SUCCESS] (state, info) {
    state[types.GET_INFO_ASYNC.loadingKey] = false
    state[types.GET_INFO_ASYNC.stateKey] = info
	},

	[types.GET_INFO_ASYNC.PENDING] (state) {
		console.log(types.GET_INFO_ASYNC.loadingKey)
		Vue.set(state, types.GET_INFO_ASYNC.loadingKey, true)
	}
}