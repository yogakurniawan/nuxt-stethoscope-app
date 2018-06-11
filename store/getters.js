import * as types from './mutation-types'

export default {
  isAuthenticated(state) {
    return state.auth.user != null
  },
  user(state) {
    return state.auth.user
  },
  isEmailVerified(state) {
    const user = state.auth.user;
    return user ? user.emailVerified : false;
  },
  isAuthLoading(state) {
    return state.auth[types.AUTH.loadingKey]
  },
  isAuthError(state) {
    const authError = state.auth[types.AUTH.errorKey]
    return authError != null
  },
  token(state) {
    return state.auth.token
  },
  lookupCurrentClinicalSystem(state) {
    const data = state.lookup.data;
    return Object.keys(data).length ? data.CurrentClinicalSystem : [];
  }
}
