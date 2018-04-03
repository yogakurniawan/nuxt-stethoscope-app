export default {
  isAuthenticated(state) {
    return state.auth.user != null
  },
  isLoggingIn(state) {
    return state.auth.loading
  },
  isAuthError(state) {
    return state.auth.error != null
  },
  token(state) {
    const userData = state.auth.user
    const stsTokenManager = userData && userData.stsTokenManager
    return userData && stsTokenManager && stsTokenManager.accessToken
  }
}