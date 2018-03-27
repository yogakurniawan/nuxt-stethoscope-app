export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  CLEAR_TOKEN(state) {
    state.token = null;
  }
}