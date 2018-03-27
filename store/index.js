import Vuex from "vuex"

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default () => {
  return new Vuex.Store({
    state: {
      token: null,
      user: null,
      error: null
    },
    actions,
    mutations,
    getters
  })
}