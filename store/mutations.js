import * as types from './mutation-types'

export default {
  SET_USER(state, payload) {
    state.auth.user = payload
  },
  SET_TOKEN(state, payload) {
    state.auth.token = payload
  },
  [types.AUTH.SUCCESS] (state, payload) {
    state.auth[types.AUTH.loadingKey] = false
    state.auth.user = payload
    state.auth[types.AUTH.errorKey] = null
	},
	[types.AUTH.PENDING] (state) {
		state.auth[types.AUTH.loadingKey] = true
	},
	[types.AUTH.FAILURE] (state, error) {
    state.auth[types.AUTH.errorKey] = error
    state.auth[types.AUTH.loadingKey] = false
	}
}