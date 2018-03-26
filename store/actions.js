// import { fetchUser, fetchItems, fetchIdsByType } from "../api"
import firebase from 'firebase'

export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({ commit, dispatch }, { type }) => {
    commit("SET_ACTIVE_TYPE", { type })
    return fetchIdsByType(type)
      .then(ids => commit("SET_LIST", { type, ids }))
      .then(() => dispatch("ENSURE_ACTIVE_ITEMS"))
  },

  // ensure all active items are fetched
  ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
    return dispatch("FETCH_ITEMS", {
      ids: getters.activeIds
    })
  },

  FETCH_ITEMS: ({ commit, state }, { ids }) => {
    // on the client, the store itself serves as a cache.
    // only fetch items that we do not already have, or has expired (3 minutes)
    const now = Date.now()
    ids = ids.filter(id => {
      const item = state.items[id]
      if (!item) {
        return true
      }
      if (now - item.__lastUpdated > 1000 * 60 * 3) {
        return true
      }
      return false
    })
    if (ids.length) {
      return fetchItems(ids).then(items => commit("SET_ITEMS", { items }))
    } else {
      return Promise.resolve()
    }
  },

  FETCH_USER: ({ commit, state }, { id }) => {
    return state.users[id]
      ? Promise.resolve(state.users[id])
      : fetchUser(id).then(user => commit("SET_USER", { id, user }))
  },

  AUTHENTICATE_USER({ commit, state }, payload) {
    let authUrl =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
      process.env.fbAPIKey;
    if (!payload.isLogin) {
      authUrl =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        process.env.fbAPIKey;
    }
    return this.$axios
      .$post(authUrl, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
      .then(result => {
        vuexContext.commit("setToken", result.idToken);
        localStorage.setItem("token", result.idToken);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
        );
        Cookie.set("jwt", result.idToken);
        Cookie.set(
          "expirationDate",
          new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
        );
      })
      .catch(e => console.log(e));
  },
}