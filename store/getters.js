import * as types from './mutation-types'

export default {
  isAuthenticated(state) {
    return state.auth.user != null
  },
  isSigningIn(state) {
    return state.auth[types.SIGNIN.loadingKey]
  },
  isSigningUp(state) {
    return state.auth[types.SIGNUP.loadingKey]
  },
  isAuthError(state) {
    const signinError = state.auth[types.SIGNIN.errorKey]
    const signupError = state.auth[types.SIGNUP.errorKey]
    return signinError != null || signupError != null
  },
  token(state) {
    return state.auth.token
  }
}