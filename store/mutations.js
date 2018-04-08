import * as types from './mutation-types'

export default {
  SET_USER(state, payload) {
    state.auth.user = payload
  },
  SET_TOKEN(state, payload) {
    state.auth.token = payload
  },
  [types.SIGNIN.SUCCESS] (state, payload) {
    state.auth[types.SIGNIN.loadingKey] = false
    state.auth.user = payload
    state.auth[types.SIGNIN.errorKey] = null
	},
	[types.SIGNIN.PENDING] (state) {
		state.auth[types.SIGNIN.loadingKey] = true
	},
	[types.SIGNIN.FAILURE] (state, error) {
		state.auth[types.SIGNIN.errorKey] = error
	},
  [types.SIGNUP.SUCCESS] (state, payload) {
    state.auth[types.SIGNUP.loadingKey] = false
    state.auth.user = payload
    state.auth[types.SIGNUP.errorKey] = null
	},
	[types.SIGNUP.PENDING] (state) {
		state.auth[types.SIGNUP.loadingKey] = true
	},
	[types.SIGNUP.FAILURE] (state, error) {
		state.auth[types.SIGNUP.errorKey] = error
	},
}