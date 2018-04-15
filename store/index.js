import Vuex from "vuex"

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import * as types from './mutation-types'

export default () => {
  return new Vuex.Store({
    state: {
      auth: {
        token: null,
        user: null,
        [types.AUTH.errorKey]: null,
        [types.AUTH.loadingKey]: false
      }
    },
    actions,
    mutations,
    getters
  })
}
