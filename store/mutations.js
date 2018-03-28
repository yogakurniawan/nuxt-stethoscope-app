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
  CLEAR_ERROR(state) {
    state.auth.error = null
  }
}