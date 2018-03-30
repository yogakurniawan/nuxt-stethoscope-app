export default {
  isAuthenticated(state) {
    return state.auth.user != null
  },
  isLoggingIn(state) {
    return state.auth.loading;
  }
}