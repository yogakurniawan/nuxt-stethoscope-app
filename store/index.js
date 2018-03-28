import Vuex from "vuex"

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default () => {
  return new Vuex.Store({
    state: {
      auth: {
        user: null,
        error: null,
        loading: false
      }
    },
    actions,
    mutations,
    getters
  })
}
