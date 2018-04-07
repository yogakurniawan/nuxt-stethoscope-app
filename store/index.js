import Vuex from "vuex"

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import * as types from './mutation-types'

export default () => {
  return new Vuex.Store({
    state: {
      auth: {
        user: null,
        [types.SIGNIN.errorKey]: null,
        [types.SIGNIN.loadingKey]: false,
        [types.SIGNUP.errorKey]: null,
        [types.SIGNUP.loadingKey]: false
      }
    },
    actions,
    mutations,
    getters
  })
}
