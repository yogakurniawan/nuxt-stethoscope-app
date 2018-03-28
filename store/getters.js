export default {
  isAuthenticated(state) {
    return state.auth.user != null
  }
}